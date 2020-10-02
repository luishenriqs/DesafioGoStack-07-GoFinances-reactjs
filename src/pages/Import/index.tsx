/*  Essa função pode ser dividida em três etapas: pegar os dados do arquivo,
enviar esses dados para o backend e retornar o usuário para página anterior.
Para pegar os dados é recomendado a utilização da FormData, porém há outras
maneiras. Crie uma new FormData() e então anexe o arquivo que foi enviado
com data.append().
Depois disso é necessário enviar os dados utilizando o back-end que foi
construído anteriormente api.post('/transactions/import', data) e por último,
com useHistory, voltar para página anterior.  */

import React, { useState } from 'react';
/* The useHistory hook gives you access to the history instance
that you may use to navigate. */
import { useHistory } from 'react-router-dom';
/* filesize() => Global function that provides an easy way to get
a human readable file size String. ($ yarn add filesize) */
import filesize from 'filesize';
import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';
import { Container, Title, ImportFileContainer, Footer } from './styles';
import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const history = useHistory();

  // ******************************************************************
  async function handleUpload(): Promise<void> {
    // The FormData() constructor creates a new FormData object;
    const data = new FormData();

    if (!uploadedFiles.length) return;

    // Backend aguarda apenas um file por vez (upload.single('file'));
    const file = uploadedFiles[0];
    // Método do FormData() => formData.append(name, value, filename);
    data.append('file', file.file, file.name);

    try {
      await api.post('/transactions/import', data);
      // (useHistory) => history.push('/')  => retorna para a Dashboard;
      history.push('/');
    } catch (err) {
      console.log(err.response.error);
    }
  }
  // ******************************************************************

  // ******************************************************************
  /* function chamada no momento do upload (onUpload), ela carrega o
  uploadFiles através do setUploadedFiles para que seja usado pela
  function handleUpload() */
  function submitFile(files: File[]): void {
    const uploadFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));
    setUploadedFiles(uploadFiles);
  }
  // ******************************************************************

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
