import React from 'react'
import './default.scss'

export default class WalmartM extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.querySelector(".loading").style.visibility = 'hidden'
    }

    render() {
        return <article className="cases row col-xs-12" style={{ backgroundColor: "white" }}>
            <div className="col-12 title">
                <h2 style={{ color: 'black' }}>DIVULGAÇÃO DO SITE WALMART.COM</h2>
                {/* <img src="https://portfolio.duee.com.br/wp-content/uploads/2018/09/KV-Starbucks-NITRODRAFT_V32.png" alt="" /> */}
            </div>
            <div className="row conteudo content">
                <div className="col-xs-12">
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2014/02/walm2.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2014/02/walm3.jpg" alt="" />
                <img src="https://portfolio.duee.com.br/wp-content/uploads/2014/02/walm1.jpg" alt="" />
                </div>
            </div>

            <div className="row content describes" style={{ color: 'black' }}>
                <div className="col-xs-12 col-md-8 col-sm-6">
                    <p><b>SOBRE O PROJETO</b></p>
                    <p>Ação de divulgação do site walmart.com para reforçar a campanha de compras de natal.</p>
                </div>
                <div className="col-xs-12 col-md-4 col-sm-6">
                    <p><b>DETALHES DO PROJETO</b></p>
                    <p><b>CLIENTE</b> Walmart Brasil</p>
                    <p><b>DATA</b> 2012</p>
                </div>
            </div>
        </article>
    }
}