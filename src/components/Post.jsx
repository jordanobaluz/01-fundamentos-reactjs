import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState(['Post muito show!'])
    // DICA - iniciar o state com uma informação no mesmo formato/tipo da informação que será armazenada posteriormente
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    })

    const publishedDateRelativeToNow = formatDistanceToNow(
        publishedAt,
        {
            locale: ptBr,
            addSuffix: true
        }
    )

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange() {
        //DICA - necessário realizar esse procedimento, para não ficar aparecendo mensagem de campo obrigatório, mesmo após digitar algo
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    //DICA - passar funções via propriedade do componente permite a manipulação dele
    function deleteComment(commentToDelete) {
        //DICA - na imutabilidade as variaveis não sofrem mutação, nunca se altera uma variável na memoria
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            {/* renderiza o perfil do autor, com data de publicaç~~ao */}
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            {/* exibe o conteúdo da publicação, renderizando os comentários */}
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        //DICA - key somente no primeiro element do retorno, no caso a tag <p>
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>
            {/* adiciona um novo comentário */}
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    //DICA - uma propriedade quando é True, não precisa ser informada
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >Publicar</button>
                </footer>
            </form>
            {/* renderiza os comentários */}
            <div className={styles.commentList}>
                {/*DICA - não usar o index na key, pois ao mudar o conteudo de posição o index permanece o mesmo*/}
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}