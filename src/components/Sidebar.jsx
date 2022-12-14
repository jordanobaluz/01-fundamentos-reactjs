import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

// renderiza uma barra lateral para exibir perfil
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            {/* renderiza o perfil do usuário */}
            <div className={styles.profile}>
                <Avatar src="https://github.com/jordanobaluz.png" />
                <strong>Jordano Baluz</strong>
                <span>Web Developer</span>
            </div>
            {/* botão para botão editar perfil */}
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}