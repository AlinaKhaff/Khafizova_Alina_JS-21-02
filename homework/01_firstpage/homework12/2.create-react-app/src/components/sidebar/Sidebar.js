import React from "react";
import './Sidebar.css'

export class Sidebar extends React.Component {
    render() {
        return <div className = 'sidebar'>
            <div class="content-right">
                <b class="content-right__view">Морская рыба</b>
                <div class="content-right__namefish"><input type="checkbox"></input>Акула</div>
                <div class="content-right__namefish"><input type="checkbox"></input>Окунь</div>
                <div class="content-right__namefish"><input type="checkbox"></input>Палтус</div>
                <div class="content-right__namefish"><input type="checkbox"></input>Треска</div>
                <b class="content-right__view">Пресноводная рыба</b>
                <div class="content-right__namefish"><input type="checkbox" ></input>Белоглазка</div>
                <div class="content-right__namefish"><input type="checkbox" ></input>Осетр</div>
                <div class="content-right__namefish"><input type="checkbox" ></input>Речной угорь</div>
                <div class="content-right__namefish"><input type="checkbox" ></input>Налим</div>
            </div>
        </div>
    }
}