import React from 'react'
import './default.scss'

export default class Intimus extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
            <h2 style={{ color: 'black' }}>FLASHMOB INTIMUS</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2019/03/HEADER_1-1.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                {/* <video controls autoPlay={true} muted={true} loop type="col-xs-12 video/mp4" src="https://portfolio.duee.com.br/wp-content/uploads/2020/01/video_site_starbucks.mp4" /> */}
                <div className="col-xs-12">
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/76434798" id="vimeo" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Precisávamos promover a categoria de higiene feminina da Intimus, em grandes redes de varejo. Como gerar grande impacto para o público? Nós criamos uma ação de flashmob, com diversas promotoras dançando e divulgando os produtos da marca.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Kimberly Clark</p>
                    <p><b>DATA</b> 2012</p>
                </div>
            </div>
        </article>
    }
}