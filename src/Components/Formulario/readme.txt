Como usar um formulario em React

1. Crie um componente React para o formulário.

const Form = () => { 
  return ( 
    <form>
      // aqui vai o conteúdo do formulário
    </form> 
  );
}

2. Adicione um estado para armazenar os valores dos campos do formulário.

const [formData, setFormData] = useState({});

3. Utilize os eventos de mudança para atualizar o estado.

<input 
  type="text" 
  name="name" 
  value={formData.name || ''} 
  onChange={(e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }} 
/>

4. Implemente a lógica de envio do formulário.

<form onSubmit={(e) => { 
  e.preventDefault(); 
  // aqui vai a lógica de envio do formulário 
}}>

5. Adicione os campos necessários para o formulário.

<label>Name</label>
<input 
  type="text" 
  name="name" 
  value={formData.name || ''} 
  onChange={(e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }} 
/>

<label>Email</label>
<input 
  type="email" 
  name="email" 
  value={formData.email || ''} 
  onChange={(e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }} 
/>

<label>Message</label>
<textarea 
  name="message" 
  value={formData.message || ''} 
  onChange={(e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }} 
/>

<input type="submit" value="Submit" />
</form>