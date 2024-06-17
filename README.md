NEAR TESTNET FAUCET

2. Click
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/zwong91s-projects/import/hidden?s=https%3A%2F%2Fgithub.com%2Fzwong91%2Fnear-faucet-frontend&hasTrialAvailable=1&showOptionalTeamCreation=false&project-name=near-faucet-frontend&framework=nextjs&totalProjects=1&remainingProjects=1&deploymentIds=dpl_8PWUY1RcExueeN3YZJv69Gu5kbpC)

## Environment Variables

### `NEAR_NODE_URL` (optional)

### `NEAR_CALLER_ID` (required)

### `NEAR_CALLER_PK` (required)

### `NEAR_CALLER_SK` (required)

### `NEAR_FAUCET_ID` (required)

### `NEAR_VAULT_ID` (required)

3. Enjoy :)

```sh
curl -X POST -H "Content-Type: application/json" -d '{"amount":"100", "receiverId":"receiver1", "contractId":"contract1"}' http://localhost:3000/api/faucet/tokens
```
