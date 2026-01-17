import infrareportImage from "@/public/img/infrareportImage.png";
import infrareportapiImage from "@/public/img/infrareportapiImage.png";
import studybuddyapiImage from "@/public/img/studybuddyapiImage.png";
import studybuddyImage from "@/public/img/studybuddyImage.png";
import teamallocationImage from "@/public/img/teamallocationImage.png";
import savetheplanetImage from "@/public/img/savetheplanetImage.png";
import pongImage from "@/public/img/pongImage.png";
import reconhecimentofacialhaarcascadeImage from "@/public/img/reconhecimentofacialhaarcascadeImage.png";
import reconhecimentofacialhogImage from "@/public/img/reconhecimentofacialhogImage.png";
import controladorvisualdevolumeImage from "@/public/img/controladorvisualdevolumeImage.png";
import identificadordesinaisImage from "@/public/img/identificadordesinaisImage.png";
import mousevisualImage from "@/public/img/mousevisualImage.png";
import interfaceyolov8Image from "@/public/img/interfaceyolov8Image.png";
import paintvisualImage from "@/public/img/paintvisualImage.png";
import personaltrainerImage from "@/public/img/personaltrainerImage.png";
import movevisionImage from "@/public/img/movevisionImage.png";
import cadastrodeclientesImage from "@/public/img/cadastrodeclientesImage.png";
import vsmeterImage from "@/public/img/vsmeterImage.png";
import cepegImage from "@/public/img/cepegImage.png";
import iPhoneImage from "@/public/img/iphone15Image.png";
import jogodavelhaImage from "@/public/img/jogodavelhaImage.png";
import infrareportmobileImage from "@/public/img/infrareportmobileImage.png";
import jogodaforcaImage from "@/public/img/jogodaforcaImage.png";
import githubsearchImage from "@/public/img/githubsearchImage.png";
import tablemanagerIcon from "@/public/img/tablemanagerIcon.png"
import homographymatrixImage from "@/public/img/homographymatrixImage.png"
import automlImage from "@/public/img/automlImage.png"
import estimativadevelocidadeImage from "@/public/img/estimativadevelocidadeImage.png"
import sahiImage from "@/public/img/sahiImage.png"
import facecarImage from "@/public/img/facecarImage.png"
import detectorrtspImage from "@/public/img/detectorrtspImage.png"
import juditeImage from "@/public/img/juditeImage.png"
import acaideliveryImage from "@/public/img/acaideliveryImage.png";
import smarlinkImage from "@/public/img/smarlinkImage.png";
import aparatusImage from "@/public/img/aparatusbarbershop.png";
import characterconfigImage from "@/public/img/3dcharacterconfig.png";
import { Project } from "@/models/project";

export interface ProjectConstant {
  categories: ["web_development", "computer_vision", "mobile", "eletronic", "GUI"];
  divisions: [1, 2, 3];
  web_development: {
    1: Project[];
    2: Project[];
    3: Project[];
  };
  computer_vision: {
    1: Project[];
    2: Project[];
    3: Project[];
  };
  mobile: {
    1: Project[];
    2: Project[];
    3: Project[];
  };
  eletronic: {
    1: Project[];
    2: Project[];
    3: Project[];
  };
  GUI: {
    1: Project[];
    2: Project[];
    3: Project[];
  };
}

export const projects: ProjectConstant = {
  categories: ["web_development", "computer_vision", "mobile", "eletronic", "GUI"],
  divisions: [1, 2, 3],
  web_development: {
    1: [
      {
        title: "Judite",
        description: "Frontend & Backend",
        imgUrl: juditeImage,
        explanation: "Judite é uma plataforma web criada para automatizar o atendimento de empresas, integrando WhatsApp, Messenger, Instagram Direct e Webchat por meio da API oficial da Meta. O sistema oferece respostas automáticas, mensagens agendadas, dashboard com métricas, gestão de contatos e configuração completa de agentes de I.A., incluindo personalidade, ferramentas e parâmetros de operação. A plataforma também suporta contexto dinâmico extraído de vídeos, sites, PDFs, Word ou texto livre, além de integrações com serviços externos como Correios, Google Sheets, Freshdesk, Brasil API e Asaas. O agente utiliza ainda um banco de dados vetorial, permitindo respostas mais contextuais, precisas e alinhadas aos produtos e serviços da empresa. Com arquitetura modular e práticas de DevOps, o Judite é uma solução escalável, eficiente e fácil de manter.",
        isDownloadable: false,
        haveModal: true,
      },
      {
        title: "Studybuddy",
        description: "Frontend & Design",
        imgUrl: studybuddyImage,
        link: "https://kauamoreira.pythonanywhere.com/home/",
        isDownloadable: false,
        haveModal: false,
      },
      {
        title: "Infrareport",
        description: "Frontend & Google Maps",
        imgUrl: infrareportImage,
        link: "https://infrareportfrontend.vercel.app",
        isDownloadable: false,
        haveModal: false,
      },
      {
        title: "iPhone 15 Pro",
        description: "Frontend & 3D",
        imgUrl: iPhoneImage,
        link: "https://appleiphone15prokaua.vercel.app",
        isDownloadable: false,
        haveModal: false,
      },
      {
        title: "Aparatus",
        description: "Frontend & Backend",
        imgUrl: aparatusImage,
        explanation: "Aparatus é um SaaS de agendamento de barbearias que utiliza um chatbot para agendar cortes. O pagamento é feito via Stripe e a autenticação via OAuth.",
        link: "https://aparatusbarbershop.vercel.app",
        isDownloadable: false,
        haveModal: false,
      },
      {
        title: "Personagem 3D",
        description: "Frontend & 3D",
        imgUrl: characterconfigImage,
        link: "https://3dcharacterconfig.vercel.app",
        isDownloadable: false,
        haveModal: false,
      }
    ],
    2: [
      {
        title: "Açaí Delivery",
        description: "Frontend & Delivery",
        imgUrl: acaideliveryImage,
        link: "https://acaideliverysrs.vercel.app",
        isDownloadable: false,
        haveModal: false,
      },{
        title: "Table manager",
        description: "Frontend & Empresas",
        imgUrl: tablemanagerIcon,
        link: "https://tablemanager.vercel.app",
        isDownloadable: false,
        haveModal: false,
      },
      {
        title: "Save the planet",
        description: "Jogo & Entretenimento",
        imgUrl: savetheplanetImage,
        link: "https://savetheplanetkaua.netlify.app",
        isDownloadable: false,
        haveModal: false,
      },{
        title: "PONG",
        description: "Jogo & Entretenimento",
        imgUrl: pongImage,
        link: "https://pongkaua.netlify.app",
        isDownloadable: false,
        haveModal: false,
      },{
        title: "Team allocation",
        description: "Frontend & Empresas",
        imgUrl: teamallocationImage,
        link: "https://teamallocation.vercel.app",
        isDownloadable: false,
        haveModal: false,
      },{
        title: "Github search",
        description: "Frontend & API",
        imgUrl: githubsearchImage,
        link: "https://githubsearchkaua.vercel.app",
        isDownloadable: false,
        haveModal: false,
      }
    ],
    3: [
      {
        title: "Jogo da velha",
        description: "Jogo & Entretenimento",
        imgUrl: jogodavelhaImage,
        link: "https://tictactoekaua.vercel.app",
        isDownloadable: false,
        haveModal: false,
      },
      {
        title: "Infrareport API",
        description: "Backend & REST API",
        imgUrl: infrareportapiImage,
        link: "https://infrareportrestapi.pythonanywhere.com",
        isDownloadable: false,
        haveModal: false,
      },
      {
        title: "Jogo da forca",
        description: "Jogo & Entretenimento",
        imgUrl: jogodaforcaImage,
        link: "https://hangmankaua.vercel.app",
        isDownloadable: false,
        haveModal: false,
      },
      {
        title: "Studybuddy API",
        description: "Backend & REST API",
        imgUrl: studybuddyapiImage,
        link: "https://kauamoreira.pythonanywhere.com/api/",
        isDownloadable: false,
        haveModal: false,
      },
    ],
  },
  computer_vision: {
    1: [
      {
        title: "Reconhecimento facial - HOG",
        description: "I.A. & HOG",
        videoUrl: "https://www.youtube.com/embed/s4FqNTG6p_o",
        explanation: "Este projeto é uma interface gráfica desenvolvida que permite efetuar o reconhecimento de faces utilizando o método Histogram of Oriented Gradients (HOG) e ele basicamente consiste em uma rede neural já treinada que necessita de UMA única foto de um rosto qualquer e, após efetuar a leitura do rosto, ela define 128 pontos(landmarks) responsáveis por definir aquele rosto e, após isso, basta abrir a webcam ou selecionar uma nova foto com esse rosto e a I.A. reconhecerá!!!! Foi desenvolvido utilizando Python, Tkinter, OpenCV e a biblioteca \"face_recognition\".",
        imgUrl: reconhecimentofacialhogImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=1-kS-HQ3JC-XP9BYvvJj1pE8QjO3-a0Gr",
      },
      {
        title: "Detector RTSP",
        description: "Classificação e Detecção",
        videoUrl: "https://www.youtube.com/embed/nzU9LD8b0wU",
        explanation: "O Detector RTSP é um software que transforma qualquer câmera de segurança em uma central de alarme via protocolo RTSP; ele utiliza um classificador em tempo real que identifica imagens como \"Incêndio\", \"Com pessoa\" ou \"Sem pessoa\"; se o classificador determinar que algum frame possui uma pessoa, um segundo modelo, desta vez, um detector, é chamado para confirmar a presença da pessoa; se a presença for confirmada, um terceiro detector é acionado para identificar se essa pessoa está portando uma arma de fogo ou uma faca; além disso, o software conta com um sistema de detecção e classificação de incêndios; caso algum evento seja detectado, uma mensagem é enviada automaticamente para o WhatsApp do usuário com a imagem exata do frame onde o evento ocorreu; todos os modelos foram treinados por mim, e toda a interface e o backend foram desenvolvidos com HTML, CSS, JavaScript, Electron e Python.",
        imgUrl: detectorrtspImage,
        isDownloadable: false,
        haveModal: true,
      },
      {
        title: "Paint visual",
        description: "I.A. & Design",
        videoUrl: "https://www.youtube.com/embed/Z7B6_DMFadw",
        explanation: "Este projeto nada mais é que uma versão simulada e reduzida do software Paint, mas controlado pelas mãos. O software detecta os sinais feitos com a mão e permite desenhar em verde, azul e vermelho e, além disso, permite apagar o que já foi desenhado! Se você levantar o dedo indicador com o dedo médio, o software entenderá que você está selecionando uma das três cores possíveis, portanto, está em modo de seleção e, se você levantar somente o dedo indicador, o software entenderá que você está desenhando na tela. A aplicação foi desenvolvida utilizando Python, OpenCV e Mediapipe.",
        imgUrl: paintvisualImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=1eNG8LThg6vICESVci4pAxaL_Ri81Rw8y",
      },
      {
        title: "Move Vision",
        description: "I.A. & Entretenimento",
        videoUrl: "https://www.youtube.com/embed/nhY7hpbePBQ",
        explanation: "Move Vision é um jogo de movimento corporal. Basicamente, você acessa o jogo se registrando com um usuário e senha e, após clicar no botão \"Play\", o jogo abre sua câmera e divide ela em uma matriz 3x3 onde cada célula representa uma posição possível. Após isso, é exibida uma imagem e dois pontos representando a posição que você deve ficar e o jogador deve, em menos de um segundo, se adequar a posição exibida na imagem. As imagens são trocadas de segundo em segundo e, enquanto o jogador conseguir se adequar à sequência de movimentos e posições, ele ganha ponto, mas, se errar uma posição, o jogador perde.",
        imgUrl: movevisionImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=10Nn2CweBseQXDJcFYNS5_gH6jg76ZDvZ",
      },
      {
        title: "CEPEG",
        description: "I.A. & Eletrônica",
        videoUrl: "https://www.youtube.com/embed/znH3ytHdZ10",
        explanation: "O CEPEG foi um projeto desenvolvido tentando ajudar qualquer tipo de empresa que utiliza EPIs no seu ambiente de trabalho. O projeto é dividido em três etapas: <br/>1ª Etapa - Teste cognitivo;<br/>2ª Etapa - Reconhecimento do funcionário;<br/>3ª Etapa - Reconhecimento dos EPIs.<br/>Na 1ª etapa, o funcionário passa por um teste cognitivo, desenvolvido em Python(Pygame), que irá testar a cognição do funcionário, para averiguar se ele está apto ou não para executar o trabalho de risco.<br/>Na 2ª etapa, quando o funcionário vai bater o ponto, ele escolhe uma das 3 formas de reconhecimento: Reconhecimento facial, biometria ou leitor RFID. O reconhecimento do funcionário deve ser feito para averiguar se o funcionário trabalha ou não nesse setor e para registrar a sua entrada.<br/>Na 3ª e última etapa, o funcionário deve se posicionar de frente com uma câmera que estará conectada ao computador e que, através de Inteligência Artificial(Machine Learning), vai averiguar se o funcionário está ou não utilizando os EPIs. O tempo de verificação demora em torno de 8 segundos.<br/>Se o funcionário estiver utilizando os EPIs de forma correta, uma catraca libera o acesso do funcionário ao setor de trabalho, mas, se o funcionário não estiver utilizando, uma mensagem é enviada automaticamente para o WhatsApp do seu chefe, avisando sobre o mau uso das EPIs.<br/>O projeto também conta com um site e uma GUI(Interface Gráfica) para fazer cadastros de funcionários e de setores da empresa. Além disso, a GUI e o Site também exibe gráficos, tabelas, relatórios e imagens que confirmam que o funcionário estava ou não utilizando as EPIs. Todas as informações do site são guardadas no Firebase e as informações da GUI no MySQL.<br/>O CEPEG foi o melhor projeto na categoria Utilidades da Feira de projetos de 2022 da Escola Técnica de Eletrônica Francisco Moreira da Costa e ganhou uma premiação da Prefeitura Municipal.<br/>Tecnologias utilizadas na criação do projeto: Eletrônica, HTML, CSS, JavaScript, Bootstrap, Python, NodeJS, SQL, C++, OpenCV, Machine Learning, Firebase e MySQL.",
        imgUrl: cepegImage,
        isDownloadable: false,
        haveModal: true,
        link: undefined,
      },
      {
        title: "Identificador de sinais",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/8vme6-fE6Is",
        explanation: "Este projeto utiliza visão computacional para identificar sinais feitos com a mão, permitindo que o computador identifique os número 1, 2, 3, 4 e 5 quando sinalizados. A aplicação foi desenvolvida utilizando Python, OpenCV e Mediapipe.",
        imgUrl: identificadordesinaisImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=17gk1EKBWCM57YRzva9Qu6VBc1qBtENYD",
      }
    ],
    2: [
      {
        title: "Face car",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/xG1hg02VFIk",
        explanation: "Facecar foi um projeto desenvolvido pela equipe TN1101 para apresentação na feira de projetos da Escola Técnica de Eletrônica Francisco Moreira da Costa, o qual atuei orientando a equipe sobre o uso das tecnologias durante o desenvolvimento. O Facecar consiste em uma câmera instalada dentro de um carro que, por meio do método HOG (Histograma de Gradientes Orientados), reconhece a face do dono e detecta rostos desconhecidos. Caso algum rosto desconhecido permaneça por 10 segundos dentro do carro, o software endenderá que é um roubo, então enviará uma informação binária via USB para um Arduino, que acionará um relé para travar o veículo, evitando assim o furto. Em resumo, o Facecar é um projeto que, por meio da visão computacional e inteligência artificial, impede que um ladrão roube o seu carro.",
        imgUrl: facecarImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=1mITcr8L1_c1cZNPEmRv65IqNODz4jPh2",
      },
      {
        title: "Mouse visual",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/Zy6PrwxwyAM",
        explanation: "Este projeto utiliza visão computacional para identificar sinais feitos com a mão e, por meio desses sinais, controlar o cursor do mouse e até dar cliques. Muitas vezes em filmes de ficção nós víamos as pessoas interagindo com as telas dos computadores utilizando as próprias mãos. Sendo assim, a ideia desse projeto é nos proximar um pouco dessa realidade. Se você levantar somente o dedo indicador, o software entenderá que você quer mover o cursor do mouse e, se você levantar dedo indicador e o dedo médio juntos, o software entenderá que você quer dar um clique na tela. A aplicação foi desenvolvida utilizando Python, OpenCV, Mediapipe e outras tecnologias.",
        imgUrl: mousevisualImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=1QrS7uU3oZpYo0OXAY9dzTMdYV8xvlnjz",
      },
      {
        title: "Controlador de volume visual",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/cP1zfRaG5C4",
        explanation: "Este projeto utiliza visão computacional para identificar sinais feitos com a mão e, por meio desses sinais, controlar o volume do computador. O software mede a distância entre o dedo indicador e o polegar e utiliza essa distância para controlar o volume. A aplicação foi desenvolvida utilizando Python, OpenCV, Mediapipe e outras tecnologias.",
        imgUrl: controladorvisualdevolumeImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=1GMCnOPuk8kCGzM1yHKUIoCY_bm4ZvceK",
      },
      {
        title: "Matriz de homografia",
        description: "Predição & Coordenadas",
        videoUrl: "https://www.youtube.com/embed/sUUhBJ2PPc0",
        explanation: " O projeto consiste em uma GUI desenvolvida usando Python e tkinter que facilita o uso do modelo matemático de Matriz de homografia e RANSAC(RANdom SAmple Consensus) do OpenCV por meio do seu visual intuitivo permitindo estimar escalas como latitude e longitude por meio de algumas entradas de informações como X e Y.<br/> A matriz de homografica nada mais é que uma matriz 3x3 que, quando multiplicada por um array que contém as posições iniciais em uma escala específica(X e Y), te retorna uma estimativa do valor em outra escala(latitude e longitude). Além disso, o projeto conta como algoritmo RANSAC...<br/>RANSAC é uma técnica robusta para lidar com dados ruidosos, permitindo encontrar modelos precisos mesmo na presença de outliers(valores discrepantes) por meio da iteração de diversos subsets, escolhendo a matriz de homografia que consegue estimar o maior conjunto de pontos possíveis!!",
        imgUrl: homographymatrixImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.usercontent.google.com/download?id=1XvFUE7aHrmoY2b0ZEIOuuhfeRPeY2IVA",
      },
      {
        title: "AutoML",
        description: "I.A. & Predição",
        videoUrl: "https://www.youtube.com/embed/2fFKFuG7p3c",
        explanation: "Este projeto consiste em uma interface gráfica intuitiva que utiliza AutoML com PyCaret treinar o melhor modelo possível para predição de posições espaciais, como latitude e longitude por meio de uma entrada como x e y. Esta ferramenta torna o processo de análise de dados mais acessível e eficiente, facilitando a tomada de decisões em projetos de localização!<br/>O AutoML automatiza o processo de seleção de modelos e otimização de hiperparâmetros, garantindo que as melhores abordagens sejam utilizadas, mesmo para quem não é especialista em Machine Learning.",
        imgUrl: automlImage,
        isDownloadable: false,
        haveModal: true,
      },
      {
        title: "SAHI & YoloV8",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/2Rdm0xL2uck",
        explanation: "A detecção de pequenos objetos em aplicações de vigilância ou qualquer outro sistema de visão computacional representa um desafio significativo. Os objetos pequenos e distantes são frequentemente representados por um número mínimo de pixels em uma imagem e, portanto, carecem dos detalhes necessários para uma alta precisão de detecção usando detectores convencionais.<br/>Slicing Aided Hyper Inference (SAHI) é uma estrutura de código aberto que foi projetada para resolver esse problema.<br/>A principal inovação do SAHI é seu método de fatiamento (slicing), que divide imagens grandes em seções menores e aplica algum modelo de detecção de objetos em cada uma dessas fatias separadamente, permitindo um processamento mais preciso e específico para cada pedaço da imagem.",
        imgUrl: sahiImage,
        isDownloadable: false,
        haveModal: true,
      }
    ],
    3: [
      {
        title: "Interface YoloV8",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/6qG4TL1QTKg",
        explanation: "O YOLOv8 é um framework para identificação de objetos. Por padrão, o Yolo identifica até 80 objetos diferentes, mas você pode treinar a rede neural para que o Yolo identifique outros objetos caso necessite. O ponto é: Para utilizar o Yolo, é necessário longas linhas de código para passar todos os parâmetros para o framework e a interface gráfica vem resolver exatamente isso. Para selecionar ou deselecionar um objeto que o Yolo deve ou não identificar, basta dar um click no Checkbox correspondente ao objeto e ele será incluído na lista de objetos a serem identificados.",
        imgUrl: interfaceyolov8Image,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=1mngN_lPacXToiosybKPrYv9ibA89ZlGp",
      },
      {
        title: "Reconhecimento facial",
        description: "I.A. & Reconhecimento",
        videoUrl: "https://www.youtube.com/embed/QCRcDWnEPDg",
        explanation: "Este projeto é uma interface gráfica desenvolvida que permite efetuar o reconhecimento de faces em fotos e pela webcam além do cadastro de novas faces e treinamento da inteligência artificial para identificação de novas faces. A aplicação foi desenvolvida utilizando Python, OpenCV, Haarcascade e Tkinter.",
        imgUrl: reconhecimentofacialhaarcascadeImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=1EBi1P63DkbQmKV0pG38kTlQvoXLXi6rQ",
      },
      {
        title: "IA Personal trainer",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/9nlQETYTNNU",
        explanation: "Este projeto é um personal trainer automático. Utilizando inteligência artificial, é possível calcular a angulação criado por seu braço durante a execução da flexão de bíceps com halter e, utilizando essa angulação, é possível saber se o usuário está fazendo o exercício corretamente e quantas vezes ele executou. A aplicação foi desenvolvida utilizando Python, OpenCV e Mediapipe.",
        imgUrl: personaltrainerImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=1UZe8QML1JrIXm9CdAXDzFjclIuwlmsw-",
      },
      {
        title: "Velocímetro",
        description: "I.A. & Detecção",
        videoUrl: "https://www.youtube.com/embed/-LXfMSju7gQ",
        explanation: "Em todo o Brasil, torna-se importante o monitoramento de velocidade em rodovias para assegurar que os carros não estão excedendo o limite de velocidade. Foi pensando nisso que, por meio de uma simples câmera conectada ao computador, criei um algoritmo que possibilita o monitoramento da posição X e Y e da velocidade de um automóvel em qualquer estrada, utilizando o algoritmo da matriz de homografia!",
        imgUrl: estimativadevelocidadeImage,
        isDownloadable: false,
        haveModal: true,
      }
    ]
  },
  mobile:{
    1: [
      {
        title: "Infrareport Mobile",
        description: "Mobile & Google Maps",
        videoUrl: "https://www.youtube.com/embed/uwNhWWjUgpk",
        explanation: "Por acaso, já encontrou algum problema de infraestrutura na sua cidade enquanto caminhava na rua? Provavelmente, todo dia. Com a dificuldade que os cidadãos encontram de reportar tais problemas, torna-se difícil a localização dos problemas urbanos por parte da prefeitura. Foi pensando nisso que o Infrareport foi criado. A ideia é, por meio de um aplicativo mobile, permitir com que qualquer cidadão de qualquer cidade do Brasil reporte problemas de infraestrutura da sua cidade para a prefeitura de forma rápida e fácil utilizando a API do Google Maps para localizar as ocorrências.",
        imgUrl: infrareportmobileImage,
        isDownloadable: false,
        haveModal: true,
      },
    ],
    2: [],
    3: []
  },
  eletronic: {
    1: [
      {
        title: "VSMeter",
        description: "Eletrônica & IoT",
        videoUrl: "https://www.youtube.com/embed/TFDpEObSw-Q",
        explanation: "Este projeto consiste em uma roupa que mede o batimento cardíaco, oxigenação sanguínea, temperatura corporal, inclinação corporal e frequência respiratória com sensores com precisão entre 95% até 100% em comparação com sensores precisos. Além disso, nossa roupa manda a localização em tempo real do paciente para um site com uma incerteza de um raio de apenas 4 metros. Nosso projeto é uma proposta de resolução para o problema que o mundo passou em 2020 e em 2021: Dezenas, centenas, milhares de pessoas morrendo em casa, porque estavam sozinhas sem nenhum atendimento médico. O microcontrolador NodeMCU mandará as informações para a plataforma Ubidots que irá exibir os dados e irá fazer a análise das condições fisiológicas do paciente e se algum dado estiver fora do que é considerado saudável, uma ambulância é mandada até o local em que o paciente se encontra(pois o hospital terá acesso aos dados) e uma ligação é feita AUTOMATICAMENTE pelo site para os familiares da vítima, avisando sobre o local e horário do possível desmaio!",
        imgUrl: vsmeterImage,
        isDownloadable: false,
        haveModal: true,
      }
    ],
    2: [],
    3: [],
  },
  GUI: {
    1: [
      {
        title: "Cadastro de clientes",
        description: "Desktop & Banco de dados",
        videoUrl: "https://www.youtube.com/embed/N406Ala4tyk",
        explanation: "Este projeto consiste em uma aplicação desktop que permite qualquer pessoa gerenciar sua lista de clientes do seu negócio. A aplicação exibe, em uma tabela, os clientes cadastrados e permite deletar, pesquisar e inserir novos clientes na tabela. É extremamente intuitivo, leve e qualquer um pode usar!",
        imgUrl: cadastrodeclientesImage,
        isDownloadable: true,
        haveModal: true,
        link: "https://drive.google.com/uc?export=download&id=1bbjuUBhrgIxssiIYxmPIIR3IyyfpB-Ye",
      },
      {
        title: "Smarlink",
        description: "Chatbot & Redes",
        explanation: "Orientei a equipe TN2105 da ETE FMC no desenvolvimento do projeto Smarlink, um projeto que permite acessar o roteador e obter um relatório dos dispositivos conectados via Whatsapp. Por meio de um chatbot, é possível obter informações como: nome do dispositivo, IP e MAC Address. O Smartlink é uma solução inovadora para gerenciar dispositivos conectados à rede doméstica de forma prática e eficiente.",
        imgUrl: smarlinkImage,
        isDownloadable: false,
        haveModal: true,
      }
    ],
    2: [],
    3: [],
  },
};