import React, {ReactElement} from "react";
import {Dispatch} from "redux";
import './DarkMode.css';
import {connect} from "react-redux";
import {GlobalState} from "../../redux/types";
import {getDarkMode} from "../../redux/selectors";
import {setDarkMode} from "../../redux/actions";

interface DarkModeStateProps {
  darkMode: boolean;
}

interface DarkModeDispatchProps {
  enableDarkMode: () => void;
  disableDarkMode: () => void;
}

interface DarkModeProps extends DarkModeStateProps {
  onChange: () => void;
}

function mapStateToProps(state: GlobalState): DarkModeStateProps {
  return {
    darkMode: getDarkMode(state)
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    enableDarkMode: () => dispatch(setDarkMode(true)),
    disableDarkMode: () => dispatch(setDarkMode(false))
  }
}

function mergeProps(stateProps: DarkModeStateProps, dispatchProps: DarkModeDispatchProps): DarkModeProps {
  return {
    ...stateProps,
    onChange: (): void => {
      stateProps.darkMode ? dispatchProps.disableDarkMode() : dispatchProps.enableDarkMode()
    }
  }
}

function DarkMode(props: DarkModeProps): ReactElement {
  return (
    <div className="dark-mode-container">
      <input id="dark-mode" type="checkbox" checked={props.darkMode} onChange={props.onChange}/>
      <label htmlFor="dark-mode">Dark Mode</label>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DarkMode);
