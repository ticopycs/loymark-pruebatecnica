IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [Usuarios] (
    [Id] nvarchar(64) NOT NULL,
    [nombre] nvarchar(max) NOT NULL,
    [apellido] nvarchar(max) NOT NULL,
    [email] nvarchar(max) NOT NULL,
    [fechaNacimiento] datetime2 NOT NULL,
    [telefono] int NULL,
    [contacto] bit NOT NULL,
    [InsertedAt] datetime2 NULL,
    [UpdatedAt] datetime2 NULL,
    CONSTRAINT [PK_Usuarios] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [UserActivities] (
    [Id] nvarchar(64) NOT NULL,
    [fechaCracion] datetime2 NOT NULL,
    [UserId] nvarchar(64) NOT NULL,
    [Actividad] nvarchar(max) NOT NULL,
    [InsertedAt] datetime2 NULL,
    [UpdatedAt] datetime2 NULL,
    CONSTRAINT [PK_UserActivities] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_UserActivities_Usuarios_UserId] FOREIGN KEY ([UserId]) REFERENCES [Usuarios] ([Id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_UserActivities_UserId] ON [UserActivities] ([UserId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20230409031648_InitialMigration', N'5.0.17');
GO

COMMIT;
GO

