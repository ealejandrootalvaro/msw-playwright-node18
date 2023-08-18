import { expect, test as base } from '@playwright/test';
import { setupWorker, SetupWorker } from 'msw/browser';
import handlers from './mocks/handlers';

const test = base.extend<{
  worker: SetupWorker;
}>({
  worker: [
    async ({ page }, use) => {
      const worker = setupWorker(...handlers);
      await worker.start();
      use(worker);
    },
    { auto: true, scope: 'test' },
  ],
});

export { test, expect };
