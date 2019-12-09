/* eslint-disable import/no-unresolved */
import { formatDistanceStrict } from 'date-fns';

const todoItem = (data, index) => `
    <li id='todo-${index}' class='todo-items'>
        <div class='check-todo' id='check-todo-${index}'>
            <input type='checkbox' ${data.isCompleted ? 'checked' : ''} id='checkbox-${index}'/>
            <p id='title-${index}'>${data.title} <br> ${data.description} <br>
                <small 
                    id='deadline-${index}'>
                        deadline ${formatDistanceStrict(new Date(data.deadlineDate), new Date(), { addSuffix: true })}
                </small>
            </p>
        </div>
        <div class='btn-group' id='btn-group-${index}'>
            <button class='flag-btn' id='flag-todo-btn-${index}'>
                <i class='material-icons ${data.isHighPriority ? 'text-red' : ''}' id='flag-${index}'>
                    flag
                </i>
            </button>
            <button class='edit-btn' id='edit-todo-btn-${index}'>
                <i class='material-icons' id='edit-${index}'>
                    edit
                </i>
            </button>
            <button class='remove-btn' id='remove-todo-btn-${index}'>
                <i class='material-icons' id='remove-${index}'>
                    remove
                </i>
            </button>
        </div>
     </li>
`;

export default todoItem;
