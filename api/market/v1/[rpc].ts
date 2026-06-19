export const config = { runtime: 'edge' };

import { createDomainGateway, serverOptions } from '../../../server/gateway';
import { createMarketServiceRoutes } from '../../../src/generated/server/worldview/market/v1/service_server';
import { marketHandler } from '../../../server/worldview/market/v1/handler';

export default createDomainGateway(
  createMarketServiceRoutes(marketHandler, serverOptions),
);
