import Layout from "./components/Layout";
import MainContent from "./components/MainContent";
import { OrdersProvider } from "./context/OrdersContext";

function App() {
  return (
    <OrdersProvider>
      <div className="App">
        <Layout>
          <MainContent />
        </Layout>
      </div>
    </OrdersProvider>
  );
}

export default App;
