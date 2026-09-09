## Code is easy to change. Architecture is expensive to change
## Software is data + behaviour
## Design Pattern:
   1. Define the responsibility.
   2. Decide which module owns it.
   3. Describe the data flow.
   4. Write the pseudocode.
   5. Implement the code.
   6. Review and refine.

## Chapter Preview
   - Chapter 1: Modelling a task (Objects,Properties,Varibales)
   - Chapter 2: Creating the Task Engine (Functions,Parameters,Return Values)
   - Chapter 3: Managing Muliple Tasks (Arrays,Loops,Iteration)
   - Chapter 4: Making Decisions (Conditionals,Validation)
   - Chapter 5: Finding and Updating Tasks (Array Methods)
   - Chapter 6: Bringing the Engine to Life (DOM Manipulation and Events)

## Refactoring - Questions to ask as I inspect each file
 1. What does this module know?
 2. What does this module change? (helps distinguish btwn read and write and understand state owneership)
 3. What does this module depend on?   
 4. Who depends on this module?
 5. Is the dependancy necessary?
 6. Would this work if the CLI disappeared? - If we deleted cli/ would taskManager still work? if yes, excellent, otherwise, there`s CLI leakage.

 ## Inspection order
 1. projectModule.js
 2. projectManager.js
 3. projectController.js
 4. projectFileStorage.js
 5. projectStorage.js
 6. projectView.js

 7. taskModel.js
 8. taskManager.js
 9. taskController.js
 10. taskFileStorage.js
 11. taskStorage.js
 12. taskView.js

 13. CLI/
 14. router.js
 15. app.js

 16. UI/
 17. tracking/
 18. utils/

 ## Each module will have an architectural record
 ## Format
- Module:
- Responsibility:
- Owns state:
- Reads:
- Writes:
- Depends on:
- Used By:
- CLI-specific?:
- Potential issue:
- Decision: