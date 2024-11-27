'use client';

import { Section, Cell, Image, List, ButtonCell } from '@telegram-apps/telegram-ui';
import { invoice } from '@telegram-apps/sdk-react';
import { Icon32ProfileColoredSquare } from '@telegram-apps/telegram-ui/dist/icons/32/profile_colored_square';
import { Icon28AddCircle } from '@telegram-apps/telegram-ui/dist/icons/28/add_circle';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';

import tonSvg from './_assets/ton.svg';

export default function Home() {
  const t = useTranslations('i18n');

  const payFetch = async () => {
    const response = await fetch('http://localhost:3001/tg/createInvoiceLink', {
      method: 'POST'
    })
    const result = await response.json()
    if (result.status === 200) {
      const data = result.data

      invoice.open(data, 'url')
      // openInvoice(data)
      console.log('pay fetch result: ', result)
    }
    else {
      
    }
  }

  return (
    <Page back={false}>
      <List
        style={{
          background: 'var(--tgui--secondary_bg_color)',
          padding: 10
        }}
      >
        <Section>
          <Cell
            before={<Icon32ProfileColoredSquare />}
            subtitle="Manage ads and payment settings"
          >
            My Ads
          </Cell>
          
          <ButtonCell before={<Icon28AddCircle />}>
            Create Ad
          </ButtonCell>

          <ButtonCell onClick={payFetch}>
            Pay via stars
          </ButtonCell>
        </Section>
      </List>
    </Page>
  );
}
