import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

// array de objetos para representar publicações de uma rede social
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jordanobaluz.png',
      name: 'Jordano Baluz',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-05 21:27:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/AugustoCalaca.png',
      name: 'Augusto Calaca',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-05 21:27:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/jean-biopark.png',
      name: 'Jean Brito',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-05 21:27:00'),
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://github.com/HonoratoSilva.png',
      name: 'Honorato Silva',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-05 21:27:00'),
  },
  {
    id: 5,
    author: {
      avatarUrl: 'https://github.com/montonurb.png',
      name: 'Bruno Monteiro',
      role: 'Flutter Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-05 21:27:00'),
  },
];

function App() {
  return (
    <div>
      {/* renderiza a imagem e logo ignite feed */}
      <Header />
      <div className={styles.wrapper}>
      {/* renderiza uma barra lateral para exibir perfil */}
        <Sidebar />
        {/* renderiza lista de publicações, para cada iteração renderiza o componente post */}
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
