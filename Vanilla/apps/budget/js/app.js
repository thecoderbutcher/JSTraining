const incomes = [
    new Income('Salary', 2000),
    new Income('Bonus', 500),
]
const outflows = [
    new Outflow('Rent', -1000),
    new Outflow('Food', -500),
    new Outflow('Car', -1000),
]

let totalIncome = () => {
    let total = 0
    incomes.forEach(element => {
        total += element.value
    })
    return total
}

let totalOutflow = () => {
    let total = 0
    outflows.forEach(element => {
        total += element.value
    });
    return total
}

const moneyFormat = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2})
}
const percentageFormat = (value) => {
    return value.toLocaleString('en-US', {style: 'percent', minimumFractionDigits: 2})
}

const deleteIncome = (id) => {
    indice = incomes.findIndex(element => element.id == id)
    incomes.splice(indice, 1) 
    headerLoader() 
}
const deleteOutflow = (id) => {
    indice = outflows.findIndex(element => element.id == id)
    outflows.splice(indice, 1) 
    headerLoader() 
}

let headerLoader = () => {
    let balance = totalIncome() + totalOutflow()
    let OutflowPercentage = percentageFormat(-1*(totalOutflow() / totalIncome()))
    document.querySelector('#balance').innerHTML = moneyFormat(balance)
    document.querySelector('#income').innerHTML = moneyFormat(totalIncome())
    document.querySelector('#outflow').innerHTML = moneyFormat(totalOutflow())
    document.querySelector('#outflow-percentage').innerHTML = OutflowPercentage

    let incomesContainer = document.querySelector('#lista-ingresos')
    let outflowsContainer = document.querySelector('#lista-egresos')

    incomes.forEach(element => {
        incomesContainer.insertAdjacentHTML('afterend',`
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${element.description}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${element.value}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="deleteIncome(${element.id})">
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
        `)
    })
    
    outflows.forEach(element => {
        outflowsContainer.insertAdjacentHTML('afterend',`
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${element.description}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${element.value}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="deleteOutflow(${element.id})">
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
        `)
    })
}