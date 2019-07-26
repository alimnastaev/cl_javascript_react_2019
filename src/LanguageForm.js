import React from 'react';

// Input Form to explore number of repos for a perticular language 
const LanguageForm = (props) => {
  return (
    <form onSubmit={props.getLanguage}>
      <input style={{ margin:"30px auto", display:"block" }} type="text" name="language"/>
      <button className="btn btn-dark btn-sm">Submit</button>
    </form>
  );
}

export default LanguageForm;