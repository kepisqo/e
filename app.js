const express = require('express');
var cors = require("cors")
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"]
  }
});

const allClients = [];

io.sockets.on('connection', function (socket) {
  
});

io.on('connection', (socket) => {

  allClients.push(socket.id);

  const ip = socket.handshake.headers['x-forwarded-for'] || socket.conn.remoteAddress.split(":")[3];
  const time = socket.handshake.time
  console.log(time + " IP:" + ip + " ID:" + socket.id);
  //console.log(socket)
  socket.emit("sendSocketId", socket.id);
  socket.emit("loginClient", allClients);
  
  socket.emit("sendSocketId", socket.id);
  console.log(allClients);

  SocketClient.findOne(
      {
          where: {ip : ip}, // ip kontrolü yapılacak
      })
      .then(client => {
          
          if(client == null){
            SocketClient.create({
                  ip : ip,
                  uniqueId : socket.id,
                  online : true,
                  
              })
              .catch(err => {
                  console.log(err);
              });
            //socket.emit("refres");
          }else{
            SocketClient.findByPk(client.id)
              .then(client => {
                  client.uniqueId = socket.id;
                  client.online = true;
                  return client.save();
              })
              .catch(err => console.log(err));
            //socket.emit("refres");
          }

      })
      .catch((err) => {
          console.log(err);
      });

  socket.on('disconnect', () => {

    SocketClient.findOne(
        {
            where: {uniqueId : socket.id}, // ip kontrolü yapılacak
        })
        .then(client => {
            
            if(client !== null){
                SocketClient.findByPk(client.id)
                .then(client => {
                    //client.uniqueId = socket.id;
                    client.online = false;
                    return client.save();
                })
                .catch(err => console.log(err));
            }
  
        })
        .catch((err) => {
            console.log(err);
        });

      let socketId = allClients.find(x => x == socket.id);
      let indexNo = allClients.indexOf(socketId);
      allClients.splice(indexNo, 1);
      console.log('user disconnected');
      console.log(allClients)
  });

  socket.on('chat message', msg => {
      socket.broadcast.emit('chat message', msg);
  });


});


const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const accountRoutes = require('./routes/account');

const errorController = require('./controllers/errors');
const sequelize = require('./utility/database');

const Category = require('./models/category');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cartItem');
const Order = require('./models/order');
const OrderItem = require('./models/orderItem');
const Celikhane = require('./models/celikhane');
const Haddehane = require('./models/haddehane');
const Aba2 = require('./models/aba2');
const SocketClient = require('./models/client');
const Endex = require('./models/endex');
const Note = require('./models/note');
const { Client } = require('@sendgrid/client');

var store = {
	host: '3.73.73.245',
	port: 3306,
	user: 'root',
	password: '123*Ssk*06',
	database: 'node',
	schema: {
		tableName: 'custom_sessions_table_name',
		columnNames: {
			session_id: 'custom_session_id',
			expires: 'custom_expires_column_name',
			data: 'custom_data_column_name'
		}
	}
};

var mysqlDbStore = new MySQLStore(store);

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    },
    store: mysqlDbStore
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        })
});

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);
app.use(accountRoutes);

app.use(errorController.get404Page);

Product.belongsTo(Category, { foreignKey: { allowNull: false } });
Category.hasMany(Product);

Product.belongsTo(User);
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });




sequelize
    //.sync({ force: true })
    .sync()
    .then(result => {
       // console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

server.listen(80, () => {
    console.log('listening on port 80');
});
