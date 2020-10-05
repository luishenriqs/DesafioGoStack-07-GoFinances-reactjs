import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { Form } from './styles';
import Logo from '../../assets/logo.svg';

interface Transaction {
  title: string;
  value: number | string;
  type: 'income' | 'outcome';
  category: string;
}

const Footer: React.FC = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  async function handleAddTransaction(
    event: FormEvent<HTMLFormElement>,
  ): Promise<Transaction> {
    event.preventDefault();
    const response = await api.post('/transactions', {
      title,
      value,
      type,
      category,
    });
    const transaction = response.data;
    setTitle('');
    setValue('');
    setCategory('');
    return transaction;
  }
  return (
    <Form onSubmit={handleAddTransaction}>
      <fieldset>
        <legend>Cadastre aqui suas transações.</legend>
        <input
          type="input"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Valor"
        />
        <button type="button" onClick={() => setType('income')} id="in">
          Income
        </button>
        <button type="button" onClick={() => setType('outcome')} id="out">
          Outcome
        </button>
        <input
          type="input"
          value={category}
          onChange={e => setCategory(e.target.value)}
          placeholder="Categoria"
        />
        <button type="submit">Enviar</button>
      </fieldset>
      <img src={Logo} alt="GoFinances" />
    </Form>
  );
};

export default Footer;
