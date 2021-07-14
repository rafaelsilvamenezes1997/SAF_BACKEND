import { Router } from 'express';

import sessionRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/user.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';

import branchesRouter from '../../../../modules/branches/infra/http/routes/branch.routes';



const routes = Router();

// User
routes.use('/sessions', sessionRouter);
routes.use('/users', usersRouter);
routes.use('/password', passwordRouter);

//Branch
routes.use('/branches', branchesRouter);

export default routes;
