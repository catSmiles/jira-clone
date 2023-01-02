import React from 'react';

import Breadcrumbs from 'shared/components/Breadcrumbs';
import Header from './Header';
import Avatar from 'shared/components/Avatar';
import Input from 'shared/components/Input';
import Button from 'shared/components/Button';

import Icon from 'shared/components/Icon';

function Board() {
  return (
    <>
      <Breadcrumbs />
      <Header />
      <Input icon="search" />
      <Input invalid={true} />
      <Input />
      <hr style={{ margin: '7px 0' }} />
      <Avatar />
      <Avatar />
      <Avatar />
      <hr style={{ margin: '7px 0' }} />

      {/* Have variant */}
      <div style={{ border: '1px solid #333' }}>
        <Button variant="secondary">Secondary</Button>
        <Button variant="empty">Empty</Button>
        <Button variant="primary">Primary</Button>
        <Button icon="github" variant="primary">
          Primary
        </Button>
      </div>

      <br />

      {/* Have variant AND disabled */}
      <Button disabled>Secondary</Button>
      <Button variant="empty" disabled>
        Empty
      </Button>
      <Button variant="primary" disabled>
        Primary
      </Button>

      <br />

      {/* Have icon */}
      <Button icon="github" />
      <Button icon="github" variant="empty" />
      <Button icon="github" variant="primary" />

      <br />

      {/* Have icon AND disabled */}
      <Button icon="github" disabled />
      <Button icon="github" variant="empty" disabled />
      <Button icon="github" variant="primary" disabled />

      <br />

      {/* Have icon AND Text */}
      <Button icon="github">Github</Button>
      <Button icon={<Icon type="github" size={18} />} variant="empty">
        Github
      </Button>
      <Button icon="github" variant="primary">
        Github
      </Button>

      <br />

      {/* Have spinner AND Text */}
      <Button isWorking>Spinner</Button>
      <Button isWorking variant="empty">
        Spinner
      </Button>
      <Button isWorking variant="primary">
        Spinner
      </Button>

      <br />

      {/* Have Spinner AND Icon ---> Done Using */}
      <Button isWorking icon="github"></Button>
      <Button isWorking icon={<Icon type="github" size={18} />}></Button>
      <Button isWorking icon={<Icon type="github" size={18} />} variant="primary" />
      <span style={{ paddingLeft: 8 }}> =&gt; This is case don't using</span>

      <br />

      {/* Have Spinner AND Icon AND Text ---> Done Using */}
      <Button isWorking icon="github">
        Spinner Icon Text
      </Button>
      <Button isWorking icon={<Icon type="github" size={18} />}>
        Spinner Icon Text
      </Button>
      <Button isWorking icon={<Icon type="github" size={18} />} variant="primary">
        Spinner Icon Text
      </Button>
      <span style={{ paddingLeft: 8 }}> =&gt; This is case don't using</span>
    </>
  );
}

export default Board;
