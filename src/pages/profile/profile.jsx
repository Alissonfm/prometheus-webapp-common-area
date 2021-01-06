import { Avatar, Paper } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import React from 'react';
import { Button } from '../../atoms';
import './profile.scss';


const Profile = (props) => {

  return (
    <div className="profile-page">

      <div className="header">
        <Avatar className="header-avatar" src="./assets/img/user-test.jpg" />

        <div className="header-wrapper">

          <div className="header-top">
            <div className="role">
              <h2>Fernando Siqueira</h2>
              <h4> Professor de matemática e Orientador</h4>
            </div>

            <div className="tip">
              <h4>Localidade: </h4>
              <span><RoomOutlinedIcon className="icon--secondary" /> Uberlândia - MG</span>
            </div>

            <div className="tip">
              <h4>Redes Sociais: </h4>
              <span>
                <a href="https://facebook.com" target='_blank' rel="noopener noreferrer" aria-label="Navegar para Facebook"> <FacebookIcon /> </a>
                <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer" aria-label="Navegar para LinkedIn"> <LinkedInIcon /> </a>
              </span>
            </div>

            <Button>Enviar uma mensagem</Button>
          </div>

          <div className="header-bottom">
            <span className="citation">"A imaginação é mais importante que a ciência, porque a ciência é limitada, ao passo que a imaginação abrange o mundo inteiro."</span>
            <span className="citation-author"><strong>- Albert Einstein</strong></span>
          </div>
        </div>

      </div>

      <Paper className="profile-wrapper" elevation={0}>

        <div className="about">
          <h3> <PersonOutlineOutlinedIcon className="icon--primary" /> Sobre</h3>
          <div className="about-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus turpis eu sapien luctus, id pretium sem congue. Integer in nisi non neque rutrum volutpat. Fusce placerat nec mauris blandit faucibus. In hac habitasse platea dictumst. Morbi accumsan sapien purus, ac dapibus ipsum hendrerit et. Cras et cursus magna. In hac habitasse platea dictumst. Fusce gravida sapien tempor sem eleifend, posuere rhoncus sem volutpat. Duis pretium nisi vitae luctus ultrices. Phasellus ultricies venenatis sapien in rutrum. Phasellus ac felis eu nulla placerat condimentum. Mauris sodales, mi vitae sodales condimentum, turpis orci tincidunt quam, vel luctus mi sapien quis ligula. Maecenas non eros vel arcu euismod tincidunt non nec mi.
            </p>
            <p>
              Sed sed sapien vel sapien sollicitudin egestas eu quis lacus. Mauris fringilla at nulla a consectetur. Integer rhoncus odio et lacus porta cursus. Aenean et ligula nec enim ultricies semper. Maecenas nec sem eget nunc rhoncus condimentum a non lacus. Aliquam varius tempus sagittis. Duis vel finibus leo. Nulla viverra sodales arcu, efficitur pulvinar nibh sodales sed. Sed tincidunt facilisis tristique.
            </p>
          </div>
        </div>

      </Paper>

    </div >
  );
};

export default Profile;