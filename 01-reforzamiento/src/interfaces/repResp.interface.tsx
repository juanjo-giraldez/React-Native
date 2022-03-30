// Generated by https://quicktype.io

export interface ReqRespList {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        user[];
    support:     Support;
}

export interface user {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
