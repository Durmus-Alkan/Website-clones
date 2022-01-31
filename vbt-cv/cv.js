var languages = [
    'C#', 'Python', 'Html', 'Css', 'Javascript', 'Php', 'AngularJs', 'ReactJS',
    'VueJs', 'Jquery', 'Go', 'Java','VueJs', 'Jquery', 'Go', 'Java',
    'Go', 'Java','VueJs', 'Jquery', 'Go', 'Java',
    'Go', 'Java','VueJs', 'Jquery', 'Go', 'Java'
]

const tag = document.querySelector('#tag');

languages.forEach(element =>{
    const div = document.createElement('div');
    // div.className = 'checkbox-div';
    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    input.setAttribute('name',element);
    input.style.borderRadius = '100%'

    const label = document.createElement('label');
    input.setAttribute('for',element)

    var text = document.createTextNode(element)

    tag.appendChild(div)
    div.appendChild(input);
    div.appendChild(label);
    label.appendChild(text);
})