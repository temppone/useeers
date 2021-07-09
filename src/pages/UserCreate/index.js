import React, { useState } from 'react';
import { CreateTitle, CreateInfo, CreateForm } from './styles';
import { FlexContainer } from '../../shared/flexContainer';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ptForm } from 'yup-locale-pt';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const UserCreate = () => {
  const [disabledButtonCreate, setDisabledButtonCreate] = useState(false);

  yup.setLocale(ptForm);

  const schema = yup.object().shape({
    nome: yup.string().required(),
    cpf: yup
      .string()
      .matches(
        '[0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}',
        'Digite um CPF válido'
      )
      .required(),
    email: yup.string().email().required(),

    endereco: yup.object({
      cep: yup
        .string()
        .matches('d{3}[.s]?d{3}[.s]?d{3}[-.s]?d{2}', 'Digite um CEP válido')
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(handleSubmit);
  console.log(register);
  console.log(errors);

  const userCreateSubmit = (createdUser) => {
    setDisabledButtonCreate(true);

    console.log(createdUser);
  };

  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <CreateTitle>Cadastro</CreateTitle>
      <CreateInfo>Preencha o formulário</CreateInfo>

      <CreateForm action="" onSubmit={handleSubmit(userCreateSubmit)}>
        <Input
          name="nome"
          label="Nome"
          type="text"
          register={register}
          required={true}
          inputError={errors?.nome?.message}
        />
        <Input
          name="cpf"
          label="CPF"
          type="text"
          register={register}
          required={true}
          inputError={errors?.cpf?.message}
        />
        <Input
          name="email"
          label="Email"
          type="text"
          register={register}
          required={true}
          inputError={errors?.email?.message}
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

export default UserCreate;
