# _Restaurant madness_, a challenge game for your test buds and your brain!
The purpose of the game is to successfully finish a lunch session at your restaurant. You will play as the _mâitre_, the chef, the waiter and the cashier. Keep the costumers happy and get as many tips as you can! The game screen is an interface of the restaurant where you can see tables, clients, ingredients, orders, kitchen devices and the cash box. 

The **main character** is represented by an image of a young mâitre whose gender and name are defined by the player at the begginning. 
- The movement of the main character is horizontal, from the bar to the kitchen and back.
- Keyboard is used to make the player move horizontally. The table-assigning and order-taking is done with mouse clicks.
- Points are accumulated for every happy costumer.

The **costumers** come to the restaurant, are assigned a seat, have their orders taken, food is served, they eat and they pay. 
- _Happy costumer_: high level of satisfaction with the service (will leave a tip & a good review on TripAdvisor).
- _Suspicious costumer_: either too much time has passed for the waiter to assign a seat, to take the order or to bring the food (will pay for the food but not give a tip). 
- _Angry costumer_: has received a bad service (> 2 delays/errors with their orders), this costumer leaves without paying & will write a bad review on TripAdvisor.


The game ends when the lunch time is finished (5 minutes), and it can be either a succesful service, a regular one or a disaster. Each one implies a different "reward", which includes the player's name on it.
- A **success trophy** is handled at game over when > 50% of the costumers have given a tip, less than 5 errors have been made & 90% of the orders have been delivered. 
- A **regular diploma** is given at game over when 10-50% of the costumers have tips, 5-10 errors were made & 70-90% of the orders were delivered. 
- A **disaster sticker** is received when <10% costumers left tips, >10 errors were made & <70% orders were delivered. 

Extra: when you earn a success trophy, it unlocks a harder level next time you play (more recipes added to the menu, more clients/minute, less time to prepare the food).
* * *
## MVP
### Technique

- acomodar y desacomodar huéspedes
- dibujitos de mesas y de clientes
- setinterval de tiempo de espera max de clientes
- una vez sentados tienen tiempo max para pagar 
- pierdes cuando superas numero de clientes acumulados en cola (arr.length > ...) o cuando tienen que esperar demasiado en mesa (cuando termina el interval)