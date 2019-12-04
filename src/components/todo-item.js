const todoItem = (data, index) => `
    <li
     id='todo-${index}'
     class='todo-items
     ${data.isCompleted ? 'is-completed' : ''}'>${data.title}</li>
`;

export default todoItem;
