import { Reflection } from '@gfazioli/mantine-border-beam';
import { Button, Group, Input, Paper, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  return (
    <Group mt="5%" gap={120} justify="center">
      <Reflection>
        <Paper withBorder w={230} p={16}>
          <Stack>
            <img
              style={{
                borderRadius: '8px',
              }}
              alt="test"
              src="https://source.unsplash.com/k5brbv8T3yE/150x150"
            />
            <Input placeholder="Click and press TAB 2 times" />
            <Button>Cancel</Button>
          </Stack>
        </Paper>
      </Reflection>
      <Reflection disableChildren>
        <Paper withBorder w={230} p={16}>
          <Stack>
            <img
              style={{
                borderRadius: '8px',
              }}
              alt="test"
              src="https://source.unsplash.com/k5brbv8T3yE/150x150"
            />
            <Input placeholder="Your name" />
            <Button>Cancel</Button>
          </Stack>
        </Paper>
      </Reflection>
    </Group>
  );
}

const code = `
import { Reflection } from '@gfazioli/mantine-border-beam'';

function Demo() {
  <Group mt="5%" gap={120} justify="center">
    <Reflection>
      <Paper withBorder w={230} p={16}>
        <Stack>
          <img
            style={{
              borderRadius: '8px',
            }}
            alt="test"
            src="https://source.unsplash.com/k5brbv8T3yE/150x150"
          />
          <Input placeholder="Click and press TAB 2 times" />
          <Button>Cancel</Button>
        </Stack>
      </Paper>
    </Reflection>
    <Reflection disableChildren>
      <Paper withBorder w={230} p={16}>
        <Stack>
          <img
            style={{
              borderRadius: '8px',
            }}
            alt="test"
            src="https://source.unsplash.com/k5brbv8T3yE/150x150"
          />
          <Input placeholder="Your name" />
          <Button>Cancel</Button>
        </Stack>
      </Paper>
    </Reflection>
  </Group>
  );
}
`;

export const complexComponent: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 600,
  code,
};
