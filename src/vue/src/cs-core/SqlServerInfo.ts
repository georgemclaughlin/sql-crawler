﻿import { sqlServerInfoPublic } from './sqlServerInfoPublic';

export class sqlServerInfo extends sqlServerInfoPublic {
    public dataSource: string | null = null;
    public useWindowsAuthentication: boolean | null = false;
    public sqlUsername: string | null = null;
    public sqlPassword: string | null = null;
}
