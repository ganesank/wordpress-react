// Footer container
import React, { Component } from 'react';

import css from './ErrorAction.css';

class ErrorAction extends Component {
  constructor(props) {
    super(props);
    this.errorPageAction = this.errorPageAction.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  errorPageAction(actType) {
    if (this.props.action === 'home') {
      window.location = `${process.env.PUBLIC_URL}/home`;
    } else if (this.props.action === 'back') {
      window.history.back();
    } else if (this.props.action === 'refresh') {
      window.location.reload();
    } else if (this.props.action === 'login') {
      window.location = `${process.env.PUBLIC_URL}/login`;
    }
  }

  render(props) {
    let PageTitle = 'Page Not Found';
    let Pagedesc = 'We Cannot find the page you are looking for. You can either return previous page to go to home page';
    let actionTitle = 'Home';
    let PageImage = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4MCA0ODA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojNTU5OUU4OyIgZD0iTTI4OCwyNzZIMTQ3LjMxM2wxMzAuMzQ0LTEzMC4zNDRjLTYuMjQ4LTYuMjQ4LTE2LjM3Ny02LjI0OC0yMi42MjUsMEwxMzMuMTcyLDI2Ny41MTZMOTcuODIzLDE2MS40NyAgYy0xLjA4OS0zLjI2Ny00LjE0Ni01LjQ3LTcuNTg5LTUuNDdIMHYyNDhoMzQ0YzQuNDE4LDAsOC0zLjU4Miw4LTh2LTU2QzM1MiwzMDQuNjU0LDMyMy4zNDYsMjc2LDI4OCwyNzZ6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Q2RDZENjsiIGQ9Ik0zNTIsMzQwYzAtNS41MzYtMC43NzYtMTAuODc3LTIuMDk4LTE2SDI5NmMtNC40MTgsMC04LDMuNTgyLTgsOHYzMmMwLDQuNDE4LDMuNTgyLDgsOCw4aDU2VjM0MHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNENkQ2RDY7IiBkPSJNMCwxOTZoNTguMDQ4YzMuNTMzLDAsNi42NDcsMi4zMTcsNy42NjMsNS43MDFsMTkuMiw2NEM4Ni40NSwyNzAuODM0LDgyLjYwNywyNzYsNzcuMjQ4LDI3NkgwVjE5NnogICAiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojOEE4QThBOyIgZD0iTTMzMC44MzIsNjguNDk1TDMyOCw2MGMwLTEzLjI1NS0xMC43NDUtMjQtMjQtMjRoMGMtMjYuNTEsMC00OCwyMS40OS00OCw0OHYwICBjMCwxMy4yNTUsMTAuNzQ1LDI0LDI0LDI0aDBsMC4zOTcsMC4wMDNjMTcuMDc5LDAuMTM4LDI2Ljg1NCwxOS41MjcsMTYuODA4LDMzLjM0TDI0MCwyMjBsMjQsMjRsMjMuMzg5LTEwLjAyNCAgYzE5LjY5Ni04LjQ0MSw0Mi41NDctNC4wNDEsNTcuNywxMS4xMTJsMCwwYzkuNTQ4LDkuNTQ4LDIyLjQ5NywxNC45MTIsMzYsMTQuOTEyaDBDNDA5LjIwNiwyNjAsNDMyLDIzNy4yMDYsNDMyLDIwOS4wODh2MCAgYzAtMTMuNTAzLTUuMzY0LTI2LjQ1Mi0xNC45MTItMzZMMzg0LDE0MGgzNmMyOC43MTksMCw1Mi0yMy4yODEsNTItNTJ2MGMwLTI4LjcxOS0yMy4yODEtNTItNTItNTJoLTYuNTIxICBjLTIyLjM4MiwwLTQyLjI1NCwxNC4zMjItNDkuMzMxLDM1LjU1NnYwQzM1Ni40NDksODUuNDgyLDMzNS44NjMsODMuNTksMzMwLjgzMiw2OC40OTV6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzRDZEQTY7IiBkPSJNMzIsMzI0SDB2LTE2aDMyYzQuNDE4LDAsOCwzLjU4Miw4LDhsMCwwQzQwLDMyMC40MTgsMzYuNDE4LDMyNCwzMiwzMjR6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNUM1QzsiIGQ9Ik0zODEuMDksMjY4Yy0xNS43MzgsMC0zMC41MzEtNi4xMjktNDEuNjU2LTE3LjI1NGMtMTIuOTE0LTEyLjkxNC0zMi4xMTMtMTYuNTk0LTQ4Ljg5NS05LjQxOCAgIGwtMjMuMzg3LDEwLjAyM2wtNi4zMDUtMTQuNzAzbDIzLjM4Ny0xMC4wMjNjMjIuODQ4LTkuNzg5LDQ4Ljk0OS00Ljc1LDY2LjUxMiwxMi44MDlDMzU4Ljg1MiwyNDcuNTM1LDM2OS42MjUsMjUyLDM4MS4wOSwyNTIgICBjMjMuNjYsMCw0Mi45MS0xOS4yNSw0Mi45MS00Mi45MWMwLTExLjQ2NS00LjQ2NS0yMi4yMzgtMTIuNTY2LTMwLjM0NGwtMzMuMDktMzMuMDljLTIuMjg5LTIuMjg5LTIuOTczLTUuNzI3LTEuNzM0LTguNzE5ICAgYzEuMjM4LTIuOTg4LDQuMTU2LTQuOTM4LDcuMzkxLTQuOTM4aDM2YzI0LjI2MiwwLDQ0LTE5LjczOCw0NC00NHMtMTkuNzM4LTQ0LTQ0LTQ0aC02LjUyYy0xOC45NjksMC0zNS43NDIsMTIuMDktNDEuNzQyLDMwLjA4NiAgIGwtMTIuMTQ4LDM2LjQ0NWwtMTUuMTgtNS4wNjNsMTIuMTQ4LTM2LjQ0NUMzNjQuNzM4LDQ0LjQ4OCwzODcuNjEzLDI4LDQxMy40OCwyOEg0MjBjMzMuMDg2LDAsNjAsMjYuOTE0LDYwLDYwcy0yNi45MTQsNjAtNjAsNjAgICBoLTE2LjY4OGwxOS40MzQsMTkuNDM0QzQzMy44NzEsMTc4LjU1OSw0NDAsMTkzLjM1Miw0NDAsMjA5LjA5QzQ0MCwyNDEuNTc0LDQxMy41NzQsMjY4LDM4MS4wOSwyNjh6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNUM1QzVDOyIgZD0iTTI0NC44MDEsMjI2LjM5OGwtOS42MDItMTIuNzk3bDI1LjYwMi0xOS4xOTlDMjg2LjkzOCwxNzQuNzk3LDMxOS4zMjgsMTY0LDM1MiwxNjR2MTYgICBjLTI5LjIzNCwwLTU4LjIxMSw5LjY2LTgxLjU5OCwyNy4xOTlMMjQ0LjgwMSwyMjYuMzk4eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNUM1QzsiIGQ9Ik0zMTIsMTQwaC0xNnYtOGMwLTguODI0LTcuMTc2LTE2LTE2LTE2Yy0xNy42NDUsMC0zMi0xNC4zNTUtMzItMzJjMC0zMC44NzksMjUuMTIxLTU2LDU2LTU2ICAgYzE3LjY0NSwwLDMyLDE0LjM1NSwzMiwzMnYxNmgtMTZWNjBjMC04LjgyNC03LjE3Ni0xNi0xNi0xNmMtMjIuMDU1LDAtNDAsMTcuOTQ1LTQwLDQwYzAsOC44MjQsNy4xNzYsMTYsMTYsMTYgICBjMTcuNjQ1LDAsMzIsMTQuMzU1LDMyLDMyVjE0MHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojM0Q2REE2OyIgZD0iTTM1MiwzOTZ2LThIMHYxNmgzNDRDMzQ4LjQxOCw0MDQsMzUyLDQwMC40MTgsMzUyLDM5NnoiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNTU1NTU1OyIgY3g9IjIxNiIgY3k9IjQwNCIgcj0iNDgiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0Q2RDZENjsiIGQ9Ik0yMTYsNDEyTDIxNiw0MTJjLTQuNDE4LDAtOC0zLjU4Mi04LThsMCwwYzAtNC40MTgsMy41ODItOCw4LThoMGM0LjQxOCwwLDgsMy41ODIsOCw4bDAsMCAgQzIyNCw0MDguNDE4LDIyMC40MTgsNDEyLDIxNiw0MTJ6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=';
    switch (this.props.type) {
      case 'Product404': {
        PageTitle = 'Product Not Found';
        Pagedesc = 'Product Not Available';
        PageImage = '';
        break;
      }
      case 'SomeThingWrong': {
        PageTitle = 'Something went wrong !';
        Pagedesc = 'The Link you followed probably broken or not exists';
        PageImage = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3OS4wMzIgNDc5LjAzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc5LjAzMiA0NzkuMDMyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6IzU1OTlFODsiIGQ9Ik0xODgsMjM5LjUxNkg5OC45ODZMMjIxLjgyNCwxMDlsMCwwYy02LjQzMy02LjA1Ny0xNi41NTgtNS43NTItMjIuNjE0LDAuNjgyTDg1LjEyNywyMzAuODk2ICBsLTM1LjMwNC0xMDUuOTFjLTEuMDg5LTMuMjY3LTQuMTQ2LTUuNDctNy41ODktNS40N0gwdjI0OGgyNDhjNC40MTgsMCw4LTMuNTgyLDgtOHYtNTJDMjU2LDI2OS45NjEsMjI1LjU1NSwyMzkuNTE2LDE4OCwyMzkuNTE2eiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNENkQ2RDY7IiBkPSJNMCwxNTkuNTE2aDEwLjA0OGMzLjUzMywwLDYuNjQ3LDIuMzE3LDcuNjYzLDUuNzAxbDE5LjIsNjRjMS41NCw1LjEzMy0yLjMwNCwxMC4yOTktNy42NjMsMTAuMjk5SDAgICAiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNENkQ2RDY7IiBkPSJNMjE2LDI5NS41MTZ2MTZjMCw0LjQxOCwzLjU4Miw4LDgsOGgzMnYtMTJjMC02Ljk2Mi0xLjA1Ny0xMy42NzUtMy0yMGgtMjkgICBDMjE5LjU4MiwyODcuNTE2LDIxNiwyOTEuMDk4LDIxNiwyOTUuNTE2eiIvPgo8L2c+CjxwYXRoIHN0eWxlPSJmaWxsOiM4QThBOEE7IiBkPSJNNDczLjU1NSwyNzkuOTgxYy0xLjA3LTIyLjUxNi01LjIzLTQ0Ljc4NS0xMi4zNjMtNjYuMTkxbC0xMy43MDMtNDEuMTA1ICBjLTUuNzM4LTE3LjIxNS0xOS40NDEtMzAuOTE4LTM2LjY1Ni0zNi42NTZsLTE0LjQ3My00LjgyNmMyLjMxNS02LjEzNSwzLjY0MS0xMi43NSwzLjY0MS0xOS42ODZjMC0zMC44NzktMjUuMTIxLTU2LTU2LTU2ICBzLTU2LDI1LjEyMS01Niw1NmMwLDI0LjE1NSwxNS40MDEsNDQuNzI2LDM2Ljg3Niw1Mi41NjVjLTEyLjAzLDEzLjQyNy0yNy41NjIsMjIuODU2LTQ1LjEwNywyNy4yNDNsLTIxLjE3Miw1LjI5NyAgQzI0Ny42NDgsMTk5LjM1NiwyNDAsMjA5LjE0OSwyNDAsMjIwLjQzOGMwLDcuMTIxLDMuMDg2LDEzLjg3OSw4LjQ2NSwxOC41NDdjNS4zNzksNC42NjQsMTIuNTEyLDYuNzcsMTkuNTU1LDUuNzVsNjQuMDktOS4xNTIgIGMxNC40MTgtMi4wNDcsMjguNjE3LDQuNjg0LDM2LjExNywxNy4xOTFjNC43MDcsNy44NDQsNi4yNjIsMTcuMDk4LDQuMzc1LDI2LjA1MWwtMjMuMzg3LDExMS4wODIgIGMtMS43MzgsOC4yNTgsMC4zMTYsMTYuNzUsNS42MzMsMjMuMzAxczEzLjIwMywxMC4zMDksMjEuNjQxLDEwLjMwOWMxMi44MTMsMCwyMy45My04LjY4LDI3LjAzNS0yMS4xMDlsMTUuNzE1LTYyLjg1NWwzLjYxMyw1Ny44MzYgIGMwLjkxOCwxNC42NTIsMTMuMTM3LDI2LjEyOSwyOC4zMTMsMjYuMTI5YzcuNjk1LDAsMTQuODU1LTMuMDY2LDIwLjE2OC04LjYzN2M1LjMwOS01LjU3LDguMDMxLTEyLjg3MSw3LjY2OC0yMC41NTUgIEw0NzMuNTU1LDI3OS45ODF6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzRDZEQTY7IiBkPSJNMjQsMjg3LjUxNkgwdi0xNmgyNGM0LjQxOCwwLDgsMy41ODIsOCw4bDAsMEMzMiwyODMuOTM0LDI4LjQxOCwyODcuNTE2LDI0LDI4Ny41MTZ6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNUM1QzsiIGQ9Ik0yMTYsMTY3LjUxNkwyMTYsMTY3LjUxNmMtNC40MTgsMC04LTMuNTgyLTgtOHYwYzAtNC40MTgsMy41ODItOCw4LThoMGM0LjQxOCwwLDgsMy41ODIsOCw4djAgICBDMjI0LDE2My45MzQsMjIwLjQxOCwxNjcuNTE2LDIxNiwxNjcuNTE2eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNUM1QzsiIGQ9Ik0yMzIsMTgzLjUxNkwyMzIsMTgzLjUxNmMtNC40MTgsMC04LTMuNTgyLTgtOHYwYzAtNC40MTgsMy41ODItOCw4LThoMGM0LjQxOCwwLDgsMy41ODIsOCw4djAgICBDMjQwLDE3OS45MzQsMjM2LjQxOCwxODMuNTE2LDIzMiwxODMuNTE2eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNUM1QzsiIGQ9Ik0xODQsMjE1LjUxNkwxODQsMjE1LjUxNmMtNC40MTgsMC04LTMuNTgyLTgtOHYwYzAtNC40MTgsMy41ODItOCw4LThoMGM0LjQxOCwwLDgsMy41ODIsOCw4djAgICBDMTkyLDIxMS45MzQsMTg4LjQxOCwyMTUuNTE2LDE4NCwyMTUuNTE2eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNUM1QzsiIGQ9Ik0yNTYsMTI3LjUxNkwyNTYsMTI3LjUxNmMtNC40MTgsMC04LTMuNTgyLTgtOHYwYzAtNC40MTgsMy41ODItOCw4LThsMCwwYzQuNDE4LDAsOCwzLjU4Miw4LDh2MCAgIEMyNjQsMTIzLjkzNCwyNjAuNDE4LDEyNy41MTYsMjU2LDEyNy41MTZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNUM1QzVDOyIgZD0iTTI5NiwyODcuNTE2TDI5NiwyODcuNTE2Yy00LjQxOCwwLTgtMy41ODItOC04bDAsMGMwLTQuNDE4LDMuNTgyLTgsOC04bDAsMGM0LjQxOCwwLDgsMy41ODIsOCw4ICAgbDAsMEMzMDQsMjgzLjkzNCwzMDAuNDE4LDI4Ny41MTYsMjk2LDI4Ny41MTZ6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNUM1QzVDOyIgZD0iTTE2OCwxMDMuNTE2TDE2OCwxMDMuNTE2Yy00LjQxOCwwLTgtMy41ODItOC04djBjMC00LjQxOCwzLjU4Mi04LDgtOGgwYzQuNDE4LDAsOCwzLjU4Miw4LDh2MCAgIEMxNzYsOTkuOTM0LDE3Mi40MTgsMTAzLjUxNiwxNjgsMTAzLjUxNnoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojM0Q2REE2OyIgZD0iTTI1NiwzNTkuNTE2di04SDB2MTZoMjQ4QzI1Mi40MTgsMzY3LjUxNiwyNTYsMzYzLjkzNCwyNTYsMzU5LjUxNnoiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNTU1NTU1OyIgY3g9IjE0NCIgY3k9IjM2Ny41MTYiIHI9IjQ4Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNENkQ2RDY7IiBkPSJNMTQ0LDM3NS41MTZMMTQ0LDM3NS41MTZjLTQuNDE4LDAtOC0zLjU4Mi04LThsMCwwYzAtNC40MTgsMy41ODItOCw4LThoMGM0LjQxOCwwLDgsMy41ODIsOCw4bDAsMCAgQzE1MiwzNzEuOTM0LDE0OC40MTgsMzc1LjUxNiwxNDQsMzc1LjUxNnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==';
        break;
      }
      case 'NoInternet': {
        PageTitle = 'No Internet !';
        Pagedesc = 'Please Check your Interent connection :(';
        PageImage = 'NoInternetPh';

        break;
      }

      default:
        break;
    }
    switch (this.props.action) {
      case 'home': {
        actionTitle = ' Go to home';
        break;
      }
      case 'back': {
        actionTitle = 'Go Back !';
        break;
      }
      case 'refresh': {
        actionTitle = 'Refresh !';
        break;
      }
      case 'login': {
        actionTitle = 'Login !';
        break;
      }
      default:
        break;
    }

    return (
      <div className={css.FlexPage}>

        <div className={css.FlexFull}>
          <div className={css.FlexCenter}>
            <div className={css.ImgDiv}>
              <img src={PageImage} alt={PageTitle} className={css.img} />
            </div>
            <div className="mt-5">
              <p className={css.title} >

                {PageTitle}
              </p>
              <p className={css.text}>
                {Pagedesc}
              </p>
              <button onClick={this.errorPageAction} type="button" className="btn btn-primary  mt-4 mb-5 pl-4 pr-4" >  {actionTitle}</button>
            </div>
          </div>
        </div>
      </div >
    );
  }
}


export default ErrorAction;
