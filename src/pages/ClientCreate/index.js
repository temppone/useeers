//TODO bug com a criação de clientes com o servidor

import React, { useEffect, useState } from 'react';
import { CreateHeader, CreateGreeting, CreateForm } from './styles';
import { FlexContainer, PageTitle } from '../../shared/flexContainer';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { API_URL, CLIENT_POST, CLIENT_GET } from '../../api';
import { useParams } from "react-router";

const ClientCreate = (props) => {
  const [disabledButtonCreate, setDisabledButtonCreate] = useState(false);
  const { id } = useParams();

  yup.setLocale(ptForm);

  const schema = yup.object().shape({
    nome: yup.string().required(),
    cpf: yup
      .string()
      .matches(
        '([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})',
        'Digite um CPF válido'
      )
      .required(),
    email: yup.string().email().required(),
    endereco: yup.object({
      cep: yup
        .string()
        .matches('([0-9]{5}-[0-9]{3})', 'Digite um CEP válido')
        .required(),
      rua: yup.string().required(),
      numero: yup.string().required(),
      bairro: yup.string().required(),
      cidade: yup.string().required(),
    }),
  });

  const {
    register,
    handleSubmit,
    defaultValues,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {

    const getClient = async () => {

      if (id) {
        const { url, options } = CLIENT_GET(id);
        var response = await fetch(url, options);
        var json = await response.json();
        reset(json);
      }
    }

    getClient();

  }, [])



  const clientCreateSubmit = async (createdUser) => {
    if (createdUser) {
      setDisabledButtonCreate(true);
      toast.success('Cadastrando', {
        position: 'botton-center',
      });

      const { url, options } = CLIENT_POST(createdUser);
      const response = await fetch(url, options);

    } else {
      toast.error('Algo deu errado :(', {
        position: 'botton-center',
      });
    }

  };

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
    >
      <Header />

      <CreateHeader>
        <PageTitle>Cadastro</PageTitle>
        <CreateGreeting>Preencha o formulário</CreateGreeting>
      </CreateHeader>

      <CreateForm
        action=""
        onSubmit={handleSubmit(async (e) => await clientCreateSubmit(e))}
      >
        <Input
          name="nome"
          label="Nome"
          type="text"
          register={register}
          required={true}
          inputError={errors.nome?.message}
        />
        <Input
          name="cpf"
          label="CPF"
          type="text"
          register={register}
          required={true}
          inputError={errors.cpf?.message}
        />
        <Input
          name="email"
          label="Email"
          type="text"
          register={register}
          required={true}
          inputError={errors.email?.message}
        />

        <Input
          name="endereco.cep"
          label="CEP"
          type="text"
          register={register}
          required={true}
          inputError={errors?.endereco?.cep?.message}
        />
        <Input
          name="endereco.rua"
          label="Rua"
          type="text"
          register={register}
          required={true}
          inputError={errors?.endereco?.rua?.message}
        />
        <Input
          name="endereco.numero"
          label="Numero"
          type="text"
          register={register}
          required={true}
          inputError={errors?.endereco?.numero?.message}
        />
        <Input
          name="endereco.bairro"
          label="Bairro"
          type="text"
          register={register}
          required={true}
          inputError={errors?.endereco?.bairro?.message}
        />
        <Input
          name="endereco.cidade"
          label="Cidade"
          type="text"
          register={register}
          required={true}
          inputError={errors?.endereco?.cidade?.message}
        />

        <Button buttonName="Cadastrar" disabled={disabledButtonCreate} />
      </CreateForm>
    </FlexContainer>
  );
};

export default ClientCreate;
