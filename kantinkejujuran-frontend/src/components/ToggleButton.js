// import React from 'react';

// /**
//  * Props: id, theme, toggle (On/Off), text, onClick
//  * 
//  * Themes:
//  * - TransparentTheme
//  */

// class ToggleButton extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       isOn: false,
//     };
    
//     if (!this.props.onClick) {
//       this.handleClick = () => {};
//     } else {
//       this.handleClick = this.props.onClick;
//     }
//   }
  
//   render() {
//     const classes = `ToggleButton ${this.props.theme} ${this.state.isOn ? 'On' : 'Off'}`;
    
//     return (
//       <div id={this.props.id} className={classes} onClick={this.props.handleClick}>
//         {this.props.text}
//       </div>
//     );
//   }
// }

// export default ToggleButton;
