import todoItem from "./todo-item";

const MainCard = (() => `
    <div id="main-card">
        <ul id="todo-list">
            ${[...Array(11).keys()].map((i) => todoItem(i)).join('')}
        </ul>
    </div>
`)();

export default MainCard;