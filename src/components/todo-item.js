import { formatDistanceStrict } from 'date-fns';

const todoItem = (data, index) => `
    <li id='todo-${index}' class='todo-items'>
        <div id='check-todo'>
            <input type='checkbox' ${data.isCompleted ? 'checked' : ''} id='checkbox-${index}'/>
            <p id='title-${index}'>${data.title} <br> ${data.description} <br>
              <small> deadline ${formatDistanceStrict(new Date(data.deadlineDate), new Date(), { addSuffix: true })}</small></p>
        </div>
        <div id='btn-group'>
            <button class='flag-btn' id='flag-todo-btn-${index}'>
                <i class='material-icons'>
                    flag
                </i>
            </button>
            <button class='edit-btn' id='edit-todo-btn-${index}'>
                <i class='material-icons'>
                    edit
                </i>
            </button>
            <button class='remove-btn' id='remove-todo-btn-${index}'>
                <i class='material-icons'>
                    remove
                </i>
            </button>
        </div>
     </li>
`;

export default todoItem;
