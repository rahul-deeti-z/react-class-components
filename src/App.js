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
import PortalDemo from './classcomponents/PortalDemo';
import Hero from './classcomponents/errorhandling/Hero';
import ErrorBoundary from './classcomponents/errorhandling/ErrorBoundary';
import ClickCounter from './classcomponents/hoc/ClickCounter';
import HoverCounter from './classcomponents/hoc/HoverCounter';
import ClickCounterTwo from './classcomponents/renderprops/ClickCounterTwo';
import HoverCounterTwo from './classcomponents/renderprops/HoverCounterTwo';
import User from './classcomponents/renderprops/User';
import RCounter from './classcomponents/renderprops/RCounter';
import ComponentC from './classcomponents/reactcontext/ComponentC';
import { UserProvider } from './classcomponents/reactcontext/userContext';

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
      {/* <StyleSheetDemo primary={true}/> */}
      {/* <InlineCssDemo/> */}
      {/* <Form/> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* Higherorder components */}
      {/* 
      <ClickCounter name="Rahul"/>
      <HoverCounter/> */}

      {/* render props pattern */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? 'Rahul' : 'Guest'}/> */}
      {/* <RCounter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <RCounter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* react context 
        1) Create the context
        2) Provide the value
        3) Consume the value
      */}
      <UserProvider value="Rahul">
        <ComponentC />
      </UserProvider>
    </div>
  );
}
//props are immutable, one can't change value of props

export default App;
