# Where-its

```                                   

██╗    ██╗██╗  ██╗███████╗██████╗ ███████╗    ██╗████████╗███████╗
██║    ██║██║  ██║██╔════╝██╔══██╗██╔════╝    ██║╚══██╔══╝██╔════╝
██║ █╗ ██║███████║█████╗  ██████╔╝█████╗█████╗██║   ██║   ███████╗
██║███╗██║██╔══██║██╔══╝  ██╔══██╗██╔══╝╚════╝██║   ██║   ╚════██║
╚███╔███╔╝██║  ██║███████╗██║  ██║███████╗    ██║   ██║   ███████║
 ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝    ╚═╝   ╚═╝   ╚══════╝
                                                                                                                  
```

*Vue, Vuex & Sass*

*figma:* [Sketch](https://www.figma.com/file/J5LJVkbbOzgW6CPNghTz56/Where-its-%40-(Mini-projekt)?node-id=0%3A1)

## Teams

**spicy-ninjas**

*Backend team*

**crypto-masters** 

*Frontend team - User*

**magic-zombies**

*Frontend team - Admin & Staff*

## Namnstandard

**Variablar**

**Sass**

**Divs**


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### ENDPONTS SERVER

**Buy Ticket:  POST localhost:3000/ticket**\
    userId = req.body.userId\
    eventId = req.body.eventId\
    ticketNumber = req.body.ticketNumber\
    numberOfTickets = req.body.numberOfTickets\
    sold_tickets = req.body.sold_tickets


**Get Ticket: GET localhost:3000/ticket**\
req.headers.ticketNumber

**Get all events: GET localhost:3000/events**

**Post new event: POST localhost:3000/events**\
name = req.body.name\
place = req.body.place\
startDateTime = req.body.startDateTime\
endDateTime = req.body.endDateTime\
tickets = req.body.tickets (total tickets)\
price = req.body.price
