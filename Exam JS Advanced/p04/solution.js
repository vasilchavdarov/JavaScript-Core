class PaymentManager {
    constructor(title) {
        this.title = title;
        this.element = this.createElement();
    }

    render(id) {
        let container = $('#' + id);
        container.append(this.element)
    }

    createElement() {
        let tablediv = $('<table>');
        let captiondiv = $(`<caption>${this.title} Payment Manager</caption>`);
        let theddiv = $(`<thead>
        <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
        </tr>
   </thead>
   <tbody class="payments">
        <tr>
            <td><!-- Payment's name --></td>
            <td><!-- Payment's category --></td>
            <td><!-- Payment's price --></td>
            <td><button>Delete</button></td>
        </tr>
        <tr>...</tr>
    </tbody>
    <tfoot class="input-data">
        <tr>
            <td><input name="name" type="text"></td>
            <td><input name="category" type="text"></td>
            <td><input name="price" type="number"></td>
            <td><button>Add</button></td></tr>
    </tfoot>`);

        tablediv.append(captiondiv).append(theddiv)

        return tablediv
    }

}