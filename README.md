# Group TODO Application

An application to track activities or tasks and collaborate efficiently through Lists, Boards and other visual actions. 

## Features:

1. Assignees (adding users/owners) 
2. Status of the Task (Pending, in-Progress, Completed) 
3. Priority (Level 1 - 3, High-Med-Low)
4. Dependency 
5. Comments / Notes / Remarks 
6. Personalised UI -  Color coding based on Priority and Status, Themes 

### Assignees

Define Users and Owners for each task so that there is clarity of ownership and responsibility. Each owner can further track his tasks and prioritise his work. 

### Status of the Task

Provides information on the progress of the Task and also let’s the team/group gain more information on the task. 

1. Pending  - Yet to start, assigned - Red
2. In-Progress - started work - Dark blue
3. Completed - task complete - Green

### Priority

Explains the severity or impact of the task on the project. Gives clarity on what task to be attended first and executed with importance. 

1. Level 1 - High - Red - To be done Immediately 
2. Level 2 - Med - Orange - Consider closing the task soon
3. Level 3 - Low - Yellow  - Close when possible 

### Dependency

Tasks having dependancy on other task’s completion can not be edited or worked on as it could lead to deadlock or race condition. Dependency for each task provides larger insights of what task is to be scheduled first 

### Comments / Notes / Remarks

More information on each task provided by various users can be helpful 

### Personalised UI

Adds to the visual depiction and faster grasp of information on sight. Users can vary the theme for their liking. 

1. Color coding for tasks based on Priority and Status 
2. Theme based UI (roles or owners) 

## Breakdown the work

1. Convert the app from class components to functional components - Complete 
2. Select a Feature and Implement  
    1. Priority - Input using select with three options 
    2. Role based access to certain actions (Context) 
    3. UI - Card style, Color codes for priority
    4. Testcases
