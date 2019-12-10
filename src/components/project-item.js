import state from '../state';

const projectItem = (data, index) => `
    <li id='project-${index}'
     class='project-item 
     ${index === state.get('selectedProject')
    ? 'is-selected'
    : ''}'>
        ${data}
    </li>
`;

export default projectItem;
