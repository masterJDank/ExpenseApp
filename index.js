var add = document.getElementById('but').addEventListener('click', addexpense)

function addexpense() {

    var name = document.getElementById('name').value
    var date = document.getElementById('date').value
    var amount = document.getElementById('amount').value
    var tbody = document.getElementById('table-body')

    remeffect()
    if (name != "" & date != "" & amount != "") {




        tbody.innerHTML += `<tr class="rest_row animation">
                        <td>${name}</td>
                        <td>${date}</td>
                        <td>${amount + '$'}</td>
                        <td><span class="deleteme">X</span></td>
                        </tr>`
        var name = document.getElementById('name').value = "";
        var date = document.getElementById('date').value = "";
        var amount = document.getElementById('amount').value = "";
        document.getElementById('warning').innerHTML = "";
        del()
    }
    else {
        document.getElementById('warning').innerHTML = "Fields Can't Be Empty";
    }

}

function remeffect() {

    var ele = document.getElementsByClassName('rest_row');

    for (const a of ele) {
        a.classList.remove("animation");
    }


}

var msg = document.getElementById('msg')
function del() {



    var deleteme = document.getElementsByClassName('deleteme');

    for (const i of deleteme) {

        i.addEventListener('click', () => {

            // if (confirm("Are You Sure?")) {
            i.parentElement.parentElement.remove();

            // }



        })

    }

}
