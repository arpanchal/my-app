import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';

// normal usage
<Dropdown
  placeholder="Select an option"
  options={['one', 'two', 'three']}
  value="one"
  onChange={(value) => console.log('change!', value)}
  onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
  onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
  onOpen={() => console.log('open!')}
/>