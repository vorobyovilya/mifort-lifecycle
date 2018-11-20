# Lifecycle

This app shows the lifecycle of angular components. 

The app's components tree looks like this: 
* MAIN (parent)
  * HEADER (child)
  * SKILLS (child)

You enter the name in the HEADER, which goes to the SKILLS, where you set the value of all the skills. 
All the changes goes to the MAIN which shows summary result. 

Every component implements all of the lifecycle interfaces and shows when their methods are running in the console.
For better vision every component has it's own log color:
  * MAIN - RED
  * HEADER - GREEN
  * SKILLS - BLUE
  
 
