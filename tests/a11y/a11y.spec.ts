import { expect, test } from "@playwright/test";
import { AxeBuilder } from '@axe-core/playwright'
import { createHtmlReport} from 'axe-html-reporter'

test.only('Test a11y of Sauce demo site', async ({ page }, testInfo) => {
    await page.goto('https://www.saucedemo.com');
    await page.waitForLoadState('load');

    const { violations } = await new AxeBuilder({ page })
        .withTags(["wcag2a", "best-practice"])
        //.withRules([""])
        .analyze();

    await testInfo.attach('a11y-scan-results',{
        body: JSON.stringify(violations, null, 2),
        contentType: 'application/json'
    });

    await createHtmlReport({
        results: { violations: violations},
        options: {
            outputDir: '/AxeHtmlReports/',
            reportFileName: 'index.html',
        }
    })

    expect(violations).toHaveLength(3);
    expect(getTotalViolationsCount(violations)).toEqual(6);
})

function getTotalViolationsCount(violations: Array<any> ): number {
    let uniqueViolations = 0;
    let totalViolations = 0;

    uniqueViolations = violations.length;
    for(let i = 0; i < uniqueViolations; i++){
        totalViolations = totalViolations + violations[i].nodes.length;    
    }
    return totalViolations;
}