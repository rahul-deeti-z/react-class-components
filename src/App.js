import './App.css';
import Counter from './classcomponents/staterelated/Counter';
import EventBind from './classcomponents/EventBind';
import Message from './classcomponents/staterelated/Message';
import UserGreeting from './classcomponents/conditionalrendering/UserGreeting';
import Welcome from './classcomponents/Welcome';
import ThisReactDemo from './classcomponents/this_use_react/ThisReactDemo';
import ParentComponent from './classcomponents/methodasprop/ParentComponent';
import StyleSheetDemo from './classcomponents/stylingcomponents/StyleSheetDemo';
import InlineCssDemo from './classcomponents/stylingcomponents/InlineCssDemo';
import Form from './classcomponents/formhandling/Form';
import LifecycleA from './classcomponents/lifecycle/LifecycleA';
import FragmentDemo from './classcomponents/FragmentDemo';
import PureComp from './classcomponents/purecomponents/PureComp';
import ParentComp from './classcomponents/purecomponents/ParentComp';
import RefsDemo from './classcomponents/refscomponents/RefsDemo';
import FocusInput from './classcomponents/refscomponents/FocusInput';

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Chris" heroName="Thor">
        <p>I am a children prop</p>
      </Welcome> */}
      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <EventBind/> */}
      {/* <UserGreeting/> */}
      {/* <ThisReactDemo/> */}
      {/* <ParentComponent/> */}
      {/* <StyleSheetDemo primary={false}/> */}
      {/* <InlineCssDemo/> */}
      {/* <Form/> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo /> */}
      <FocusInput />
    </div>
  );
}
//props are immutable, one can't change value of props

export default App;
