import { updateUsageJob } from './UpdateUsage';
import { setupChecks } from './SetupChecks';
import { testJob } from './TestJob';
import { stripeSetup } from './StripeSetup';

export interface Job {
    name: string;
    job: () => void | Promise<void>;
}

export const getJobs = () => [updateUsageJob, setupChecks, testJob, stripeSetup];

export const findJob = (jobs: Job[], name: string): Job | undefined =>
    jobs.find((_) => _.name === name);
