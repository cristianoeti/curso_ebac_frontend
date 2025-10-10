
// Elementos do DOM
const form = document.getElementById('info-numero');
const inputN1 = document.getElementById('n1');
const inputN2 = document.getElementById('n2');
const btnSend = document.getElementById('btn-send');


// Função para validar se n2 é maior que n1
function validarNumeros(n1, n2) {
    // Converter para números
    const numero1 = parseFloat(n1);
    const numero2 = parseFloat(n2);
    
    // Verificar se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, digite números válidos!');
        return false;
    }
    
    // Verificar se n2 é maior que n1
    if (numero2 > numero1) {
        alert(`✅ Validação OK!\nN1: ${numero1}\nN2: ${numero2}\nN2 é maior que N1!`);
        return true;
    } else {
        alert(`❌ Erro na validação!\nN1: ${numero1}\nN2: ${numero2}\nN2 deve ser maior que N1!`);
        return false;
    }
}

// Event listener para o formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    const valorN1 = inputN1.value;
    const valorN2 = inputN2.value;
    
    // Verificar se os campos não estão vazios
    if (valorN1 === '' || valorN2 === '') {
        alert('Por favor, preencha ambos os campos!');
        return;
    }
    
    // Executar a validação
    validarNumeros(valorN1, valorN2);
});

console.log('Sistema de validação carregado!');