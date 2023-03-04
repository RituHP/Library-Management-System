window.onload = function () {
  // this data may come from service.
  data = [
    { name: 'Atomic habit', author: 'James Clear', publisher: 'Penguin Random House' },
    { name: 'Psychology of Money', author: 'Morgan', publisher: 'Harriman House' },
    { name: 'Maharanas', author: 'Omendra Ratnu', publisher: 'Prabhat Prakashan Pvt. Ltd.' },
    { name: 'Super Human', author: 'Sajeev Nair', publisher: 'DK Children' },
    { name: 'Deep Work', author: 'Cal Newport', publisher: 'Grand Central Publishing' },
    { name: 'A Better India: A Better World ', author: 'Narayana Murthy', publisher: 'Penguin India' },
    { name: 'A Tale of Two Cities', author: 'Charles Darwin', publisher: 'London: Chapman & Hall' },
  ]
  let tbody = document.getElementById('table-body');
  let tr, td;

  data.forEach((element) => {
    tr = document.createElement('tr');
    for (let key in element) {
      if (element.hasOwnProperty(key)) {
        td = document.createElement('td');
        td.innerHTML = element[key];
        tr.appendChild(td);
      }
    }
    tdAction = document.createElement('td');
    btn = document.createElement('button');
    btn.innerHTML = 'Issue';
    btn.classList.add('btn')
    btn.classList.add('btn-primary');
    btn.setAttribute('data-bs-toggle', 'modal');
    btn.setAttribute('data-bs-target', '#myModal');
    tr.appendChild(tdAction);
    tdAction.appendChild(btn);
    tbody.appendChild(tr);
  });
}

function onSubmit() {
  let element = document.getElementById('alertNotification');
  element.style.display = 'block';
  setTimeout(hideNotification(element), 2000);
}

function hideNotification(element) {
  element.style.display = 'none';
}