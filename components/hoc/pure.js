import { PureComponent } from 'react';

export default function Pure(Comp) {
  return class extends PureComponent {
    render() {
      return <Comp {...this.props} />;
    }
  };
}
