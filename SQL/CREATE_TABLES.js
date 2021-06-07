export const CREATE_TABLES = {
    user:`
    CREATE TABLE IF NOT EXISTS User (
        id              INTEGER         PRIMARY KEY     AUTOINCREMENT,
        username        VARCHAR(150)    NOT NULL,
        phone           VARCHAR(15)     NOT NULL,
        pass            VARCHAR(255)     NOT NULL,
        image_url       TEXT            NOT NULL
        );
    `,
    comment:`
    CREATE TABLE IF NOT EXISTS Comment (
        id                  INTEGER      PRIMARY KEY     AUTOINCREMENT,
        content             TEXT         NOT NULL,
        created_at          TEXT         NOT NULL       DEFAULT CURRENT_TIMESTAMP,
        id_user_write       INTEGER      NOT NULL,
        id_user_belong      INTEGER      NOT NULL,
        FOREIGN KEY(id_user_write) REFERENCES User(id),
        FOREIGN KEY(id_user_belong ) REFERENCES User(id)
        );
    `,
    article:`
    CREATE TABLE IF NOT EXISTS Article (
        id                  INTEGER      PRIMARY KEY    AUTOINCREMENT,
        title               VARCHAR(250) NOT NULL,
        created_at          TEXT         DEFAULT (DATETIME('now','localtime')),
        details             TEXT         NOT NULL,
        image_url           TEXT         NOT NULL,
        id_user             INTEGER      NOT NULL,
        FOREIGN KEY(id_user) REFERENCES User(id)
        );
        `,
    offer:`
    CREATE TABLE IF NOT EXISTS Offer (
        id                  INTEGER      PRIMARY KEY    AUTOINCREMENT,
        created_at          TEXT         NOT NULL       DEFAULT CURRENT_TIMESTAMP,
        content             TEXT         NOT NULL,
        condition           INTEGER      NOT NULL       DEFAULT 2,
        id_user_maker       INTEGER      NOT NULL,
        id_user_receiver    INTEGER      NOT NULL,
        FOREIGN KEY(id_user_maker) REFERENCES User(id),
        FOREIGN KEY(id_user_receiver) REFERENCES User(id)
        );
    `,
    offerArticle:`
    CREATE TABLE IF NOT EXISTS Offer_Article (
        id                  INTEGER      PRIMARY KEY    AUTOINCREMENT,
        offer_id            INTEGER      NOT NULL,
        id_article_wanted   INTEGER      NOT NULL,
        FOREIGN KEY(offer_id) REFERENCES Offer(id),
        FOREIGN KEY(id_article_wanted) REFERENCES Article(id)
        );
    `,
    artcicleOffer:`
    CREATE TABLE IF NOT EXISTS Article_Offer (
        id                   INTEGER      PRIMARY KEY    AUTOINCREMENT,
        offer_id             INTEGER      NOT NULL,
        id_article_offered   INTEGER      NOT NULL,
        FOREIGN KEY(offer_id) REFERENCES Offer(id)
        FOREIGN KEY(id_article_offered) REFERENCES Article(id)
        );
    `
};
